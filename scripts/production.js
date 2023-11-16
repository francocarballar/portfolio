import fs from 'fs'
import { exec } from 'child_process'
import { simpleGit } from 'simple-git'

function production(packageManager) {
  let currentBranch
  const git = simpleGit()
  git.branch((err, branchSummary) => {
    if (!err) {
      currentBranch = branchSummary.current
      console.log(`⛓️ Rama actual: ${currentBranch}`)
    } else {
      console.error('❌ Ocurrió un error al obtener la rama actual de Git:', err)
    }
  })

  let hasError = false

  const command = `${packageManager} install && ${packageManager} run lint && ${packageManager} run build && git checkout main && git merge ${currentBranch} && ${packageManager} install && ${packageManager} run lint && ${packageManager} && git push origin main && git checkout ${currentBranch}`

  const childProcess = exec(command)

  childProcess.stdout.on('data', data => {
    process.stdout.write(data)
  })

  childProcess.stderr.on('data', data => {
    hasError = true
    process.stderr.write(data)
  })

  childProcess.on('error', error => {
    hasError = true
    console.error(`❌ Ocurrió un error al utilizar ${packageManager}:`, error)
  })

  childProcess.on('exit', code => {
    if (code === 0) {
      console.log(`\n✅ ${packageManager} se ejecutó exitosamente.\n✅ Todo listo para producción.`)
    } else {
      hasError = true
      console.error(`❌ ${packageManager} terminó con código de salida ${code}.`)
    }

    if (hasError) {
      console.error('Se ha producido un error. Deteniendo la ejecución.')
      process.exit(1)
    }
  })
}

function detectPackageManager() {
  if (fs.existsSync('package-lock.json')) {
    production('npm')
    return 'npm'
  } else if (fs.existsSync('pnpm-lock.yaml')) {
    production('pnpm')
    return 'pnpm'
  } else if (fs.existsSync('yarn.lock')) {
    production('yarn')
    return 'yarn'
  } else {
    return 'unknown'
  }
}

const detectedPackageManager = detectPackageManager()
console.log(`🔍 Detected Package Manager: ${detectedPackageManager}\n`)
