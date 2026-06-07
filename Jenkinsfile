pipeline {
    // Uses your native Arch host machine environment directly
    agent any 
    
    stages {
        stage("Parallel Microservices Build") {
            parallel {
                
                stage("Build python") {
                    steps {
                        // Shifts execution context inside the python folder safely
                        dir('python-app') {
                            sh "docker build -t test-python:latest ."
                        }
                    }
                }
                
                stage("Build node") {
                    steps {
                        // Shifts execution context inside the node folder safely
                        dir('node-app') {
                            sh "docker build -t test-node:latest ."
                        }
                    }
                }
                
            }
        }
    }
    
    post {
        always {
            echo "========always========"
        }
        success {
            echo "========pipeline executed successfully ========"
        }
        failure {
            echo "========pipeline execution failed========"
        }
    }
}
