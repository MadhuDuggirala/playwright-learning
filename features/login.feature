Feature: SauceDemo Login

  Scenario Outline: Login with different users
    Given the user is on the SauceDemo login page
    When the user logs in with username "<username>" and password "<password>"
    Then the login result should be "<result>"

    Examples:
      | username        | password     | result  |
      | standard_user   | secret_sauce | success |
      | locked_out_user | secret_sauce | locked  |