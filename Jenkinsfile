pipeline{
    agent any 
    stages{
        stage('instalar dependências'){
            steps{
                script{
                    bat 'npm install'
                }
            }
        }

        stage('Executar Testes'){
            steps{
                script{
                    bat 'npm test'
                }
            }
        }
    }

    post{
        always{
            echo 'Pipeline concluido'
        }
    }
}