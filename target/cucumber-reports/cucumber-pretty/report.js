$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookFlight.feature");
formatter.feature({
  "line": 1,
  "name": "Search \u0026 Book a flight",
  "description": "",
  "id": "search-\u0026-book-a-flight",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search a flight in MakemyTrip",
  "description": "",
  "id": "search-\u0026-book-a-flight;search-a-flight-in-makemytrip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Opens Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Random place",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Select From Mumbai",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select To Delhi",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select the date",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Non Stop Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Mumbai 6-12 button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify Search Flights",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click On View Price button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click On Book Now button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter Customer Details",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Fare Summery",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the book flight Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookflight.user_Opens_Browser()"
});
formatter.result({
  "duration": 9926136400,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.click_on_Random_place()"
});
formatter.result({
  "duration": 2593627300,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.select_From_Mumbai()"
});
formatter.result({
  "duration": 985599300,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.select_To_Delhi()"
});
formatter.result({
  "duration": 2388727400,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.select_the_date()"
});
formatter.result({
  "duration": 143511100,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.click_on_Search_button()"
});
formatter.result({
  "duration": 41564884400,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.click_on_Non_Stop_Checkbox()"
});
formatter.result({
  "duration": 977839300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    },
    {
      "val": "12",
      "offset": 18
    }
  ],
  "location": "Bookflight.click_on_Mumbai_button(int,int)"
});
formatter.result({
  "duration": 1209898300,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.verify_Search_Flights()"
});
formatter.result({
  "duration": 194295700,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.click_On_View_Price_button()"
});
formatter.result({
  "duration": 309331600,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.click_On_Book_Now_button()"
});
formatter.result({
  "duration": 297453100,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.enter_Customer_Details()"
});
formatter.result({
  "duration": 18862648000,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.verify_Fare_Summery()"
});
formatter.result({
  "duration": 62424600,
  "status": "passed"
});
formatter.match({
  "location": "Bookflight.close_the_book_flight_Browser()"
});
formatter.result({
  "duration": 832153800,
  "status": "passed"
});
formatter.uri("SearchHotels.feature");
formatter.feature({
  "line": 1,
  "name": "Search Hotels in MakeMyTrip",
  "description": "",
  "id": "search-hotels-in-makemytrip",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Hotels Page in MakemyTrip",
  "description": "",
  "id": "search-hotels-in-makemytrip;verify-hotels-page-in-makemytrip",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Searchhotel"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Randoms place",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Hotels Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Mumbai from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the Hotels Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the search hotels Browser",
  "keyword": "And "
});
formatter.match({
  "location": "HotelList.user_Open_Browser()"
});
formatter.result({
  "duration": 8843222900,
  "status": "passed"
});
formatter.match({
  "location": "HotelList.click_on_Randoms_place()"
});
formatter.result({
  "duration": 1990035200,
  "status": "passed"
});
formatter.match({
  "location": "HotelList.click_on_Hotels_Tab()"
});
formatter.result({
  "duration": 272386200,
  "status": "passed"
});
formatter.match({
  "location": "HotelList.select_Mumbai_from_drop_down()"
});
formatter.result({
  "duration": 16685509300,
  "status": "passed"
});
formatter.match({
  "location": "HotelList.verify_the_Hotels_Page()"
});
formatter.result({
  "duration": 114669900,
  "status": "passed"
});
formatter.match({
  "location": "HotelList.close_the_search_hotels_Browser()"
});
formatter.result({
  "duration": 4144632600,
  "status": "passed"
});
});