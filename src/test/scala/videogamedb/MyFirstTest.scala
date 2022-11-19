package videogamedb

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class MyFirstTest extends Simulation {

  // 1 Http configuration
  val httpProtocol = http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  // 2 Scenario Configuration
  val scn = scenario("My first test")
    .exec(http("Get all games")
      .get("/videogame"))
  // 3 Load Scenario
  setUp(scn.inject(atOnceUsers(1)))
    .protocols(httpProtocol)
}
