package videogamedb

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class CheckResponseBodyAndExtract extends Simulation {

  // 1 Http configuration
  val httpProtocol = http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  val scn = scenario("Check with JSON path")
    .exec(http("Get specific game")
      .get("/videogame/1")
      .check(jsonPath("$.name").is("Resident Evil 4")))

    .exec(http("Get all video games")
      .get("/videogame")
      .check(jsonPath("$[1].id").saveAs("gameId")))
    //.exec { session => println(session); session }

    .exec(http("Get specific game with ID as variable")
      .get("/videogame/${gameId}")
      .check(jsonPath("$.name").is("Gran Turismo 3"))
      .check(bodyString.saveAs("responseBody")))
    //.exec { session => println(session("responseBody").as[String]); session }

  setUp(scn.inject(atOnceUsers(1)))
    .protocols(httpProtocol)
}
