var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "2",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "76",
        "ko": "63"
    },
    "maxResponseTime": {
        "total": "211",
        "ok": "211",
        "ko": "63"
    },
    "meanResponseTime": {
        "total": "117",
        "ok": "144",
        "ko": "63"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "68",
        "ko": "0"
    },
    "percentiles1": {
        "total": "76",
        "ok": "144",
        "ko": "63"
    },
    "percentiles2": {
        "total": "144",
        "ok": "177",
        "ko": "63"
    },
    "percentiles3": {
        "total": "197",
        "ok": "204",
        "ko": "63"
    },
    "percentiles4": {
        "total": "208",
        "ok": "210",
        "ko": "63"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "2",
        "ko": "1"
    }
},
contents: {
"req_get-specific-ga-03796": {
        type: "REQUEST",
        name: "Get specific game",
path: "Get specific game",
pathFormatted: "req_get-specific-ga-03796",
stats: {
    "name": "Get specific game",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "211",
        "ko": "63"
    },
    "maxResponseTime": {
        "total": "211",
        "ok": "211",
        "ko": "63"
    },
    "meanResponseTime": {
        "total": "137",
        "ok": "211",
        "ko": "63"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "137",
        "ok": "211",
        "ko": "63"
    },
    "percentiles2": {
        "total": "174",
        "ok": "211",
        "ko": "63"
    },
    "percentiles3": {
        "total": "204",
        "ok": "211",
        "ko": "63"
    },
    "percentiles4": {
        "total": "210",
        "ok": "211",
        "ko": "63"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    }
}
    },"req_get-all-video-g-6a25e": {
        type: "REQUEST",
        name: "Get all video games",
path: "Get all video games",
pathFormatted: "req_get-all-video-g-6a25e",
stats: {
    "name": "Get all video games",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles2": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles3": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles4": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
