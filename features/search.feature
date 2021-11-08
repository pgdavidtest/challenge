Feature: Search Functionality


    @TestCase1
    Scenario Outline: As a user, I can search by product SKU

        Given I am on the home page
        When I search by product sku
            | SKU     |
            | 6483635 |
        Then I shall verify the ProductName Matches the SKU displayed
            | ProductName                                      |    SKU    |
            | Google - Pixel 6 128GB (Unlocked) - Stormy Black |  6483635  |


    @TestCase2
    Scenario Outline: As a user, I can search for stores near me

        Given I am on the home page
        When I search for stores and by zipcode
            | Search | zipcode |
            | stores | 19152   |
        Then I shall see Stores near 19152
            | NumberOfStores | zipcode | PageTitle                                                |
            | 15             | 19152   | Best Buy Store Locator: Store Hours, Directions & Events |

    @TestCase3
    Scenario Outline: As a user, I can search By Brands

        Given I am on the home page
        When I search by brand name
            | Brand |
            | Apple |
        Then I can select category, sub category, then slect a name and verify the url
            | Category | SubCategory | Name                     |             
            | Apple TV | Apple TV 4K | Apple TV 4K 64GB - Black | 


   @TestCase4
    Scenario Outline: As a user, I can search by Department

        Given I am on the home page
        When I search by store department
            | Department | Category      | SubCategory               | Product                                                                                |
            | Appliance  | Refrigerators | French Door Refrigerators | LG - 25.1 Cu. Ft. French Door Refrigerator with Ice Maker - PrintProof Stainless Steel |
        Then I shall verify the product displayed
            | Name                                                                                   |
            | LG - 25.1 Cu. Ft. French Door Refrigerator with Ice Maker - PrintProof Stainless Steel |

    @TestCase5
    Scenario Outline: As a user, I can search by product

        Given I am on the home page
        When I search for products, apply filter and validate results
            | SearchedItem | Price            | Color | Condition | Product                                                                                        |    Iteration   |
            | Television   | $1250 - $1499.99 | Black | Open-Box  | Samsung - 75" Class Q70A Series QLED 4K UHD Smart Tizen TV                                     |       3        |
            | Phone        | $750 - $999.99   | Blue  | New       | Apple - iPhone 13 5G 128GB - Blue (T-Mobile)                                                   |       3        |
            | Watch        | $500 - $749.99   | Gold  | New       | Apple Watch Series 6 (GPS + Cellular) 44mm Gold Aluminum Case with Pink Sand Sport Band - Gold |       3        |




