Feature: User Open Menu About Us in Stockbit

  Scenario: User Open Section Homepage
    Given User on Stockbit.com homepage
    When User click "About Us" category on Stockbit homepage
    Then User success validate to "About Us" menu in About Us
