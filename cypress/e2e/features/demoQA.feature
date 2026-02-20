Feature: Login

  Scenario: Login com sucesso
    Given que o usuário acessa a página de login
    When ele preenche usuário e senha válidos
    And clica no botão de login
    Then ele deve ser redirecionado para a home