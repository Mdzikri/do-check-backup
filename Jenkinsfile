pipeline {
    agent any

        stage('build') {
            steps {
                sh 'docker build -t landing-page:${BUILD_NUMBER} .'
            }
        }
        
        // stage('push ECR') {
        //     steps {
        //         sh ''
        //     }
        // }
        
        
        stage('Check & Delete Container') {
            steps {
                script {
                    def containerPort = '80'
                    def runningContainers = sh(script: "docker ps -q --filter \"publish=${containerPort}\"", returnStdout: true).trim()

                    if (runningContainers) {
                        sh "docker stop ${runningContainers}"
                        sh "docker rm ${runningContainers}"
                        echo 'berhasil dihapus'
                    }
                    else
                       echo 'masih ada container dan port yang sama'    
                }
            }
        }
        
        stage('deploy') {
            steps {
                sh 'docker run --name wool-landing -d -p 80:80 landing-page:${BUILD_NUMBER}'
            }
        }
        
        
    }
}
