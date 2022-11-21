package videogamedb.scriptfundamentals

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class CheckResponseCode extends Simulation {

  //noinspection TypeAnnotation
  val httpProtocol = http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  //noinspection TypeAnnotation
  // scenario 2
  val scn = scenario("Video Game DB - 3 calls")
    .exec(http("get all video games - 1st call")
      .get("/videogame")
      .check(status.is(200)))

    .pause(5)

    .exec(http("Get a specific game")
      .get("/videogame/1")
    .check(status.is(200 - 210)))
    .pause(1, 10)

    .exec(http("Get all video games - 2nd call")
      .get("/videogame")
    .check(status.not(400 - 404)))
    .pause(3000.milliseconds)

  setUp(scn.inject(atOnceUsers(1)))
    .protocols(httpProtocol)

}
