pipeline {
agent any
stages {
    stage('Initialize'){
        steps {
                sh 'def dockerHome = tool "myDocker"'
                sh 'env.PATH = "${dockerHome}/bin:${env.PATH}"'                }
        }
    stage('Push to Docker Registry'){
        steps {
            sh "withCredentials([usernamePassword(credentialsId: 'dockerHubAccount', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {                
            pushToImage(CONTAINER_NAME, CONTAINER_TAG, USERNAME, PASSWORD)
            } "           
        }  
    }
}}
