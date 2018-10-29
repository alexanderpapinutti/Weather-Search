var app = new Vue({
    el: "#app",
    data: {
        allInfo: [],
        search:'',
        city:"London",
        country:'uk',
        url:"https://api.openweathermap.org/data/2.5/weather?q=London",
    },
    created() {
        this.dataTable(this.url);

    },
    
    methods: {

        dataTable: function (url) {
            var fetchConfig =
                fetch(url, {
                    method: "GET",

                    headers: ({
                        "APPID": '9f028a252c9482c30904dbda5c75f15b',
                        "Access-Control-Allow-Origin":'http://127.0.0.1:52880/',
                    })

                })
                .then(function (response) {
                    return response.json();
                    
                })
                .then(function (data) {
                    console.log(data)
                    
                })
                .catch(error => alert(error));
        },
    }
});

//      allMembers: [],
//        showFullTable: true,
//        showPartyTable: false,
//        showStatesTable: false,
//        partyArray: [],
//        statesArray: [],
//        newStatesArray: [],
//        senate: "https://api.propublica.org/congress/v1/113/senate/members.json",
//        house: "https://api.propublica.org/congress/v1/113/house/members.json",
//    },
//    created() {
//        if (location.pathname == "/house-data.html") {
//            this.dataTable(this.house);
//        } else if (location.pathname == "/senate-data.html") {
//            this.dataTable(this.senate);
//
//        }
//    },
//    methods: {
//
//        dataTable: function (link) {
//            var fetchConfig =
//                fetch(link, {
//                    method: "GET",
//
//                    headers: ({
//                        "X-API-Key": '7YtBT0L3pw0Tqffy6BrgOq44kF4guyNotpUJppRr'
//                    })
//
//                })