Feature: User Open Menu Register in Stockbit

  Scenario: User Open Register Homepage
    Given User on Stockbit.com homepage
    When User click "Sign Up" category on Stockbit homepage
    Then User validate "Register" page
