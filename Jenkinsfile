def CONTAINER_NAME="jenkins-pipeline"
def CONTAINER_TAG="latest"

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
    stage("Image Prune"){
        steps {
        sh "imagePrune(CONTAINER_NAME)"
        }
    }

    stage('Image Build'){
        steps {
        imageBuild(CONTAINER_NAME, CONTAINER_TAG)
        }
    }
    stage('Push to Docker Registry'){
        steps {
            withCredentials([usernamePassword(credentialsId: 'dockerHubAccount', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                pushToImage(CONTAINER_NAME, CONTAINER_TAG, USERNAME, PASSWORD) }
                            }
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
