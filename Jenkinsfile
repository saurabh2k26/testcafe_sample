pipeline {
agent any
stages {
    stage('Initialize'){
        steps {
            script { def dockerHome = tool "myDocker" 
                    sh "echo \"env.PATH = ${env.PATH}\""
                    sh "echo \"env.PATH = \"${dockerHome}/bin:${env.PATH}\"\""
                   }}
        }
    stage('Install') {          
            agent {
                docker {
                    image 'node:10.11'
                    reuseNode true
                }
            }
            environment {
                HOME = '.'
            }

            steps {
                sh 'npm config set unsafe-perm true'                
                sh 'npm install testcafe-reporter-html'
                sh 'npm install testcafe-reporter-junit'
            }           
        }
}}
