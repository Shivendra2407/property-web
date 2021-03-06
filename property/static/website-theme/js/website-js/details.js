let website_details_app = new Vue({
    el: "#website-details-app",
    data: {
        propertyId: 0,
        propertyDetails: '',
        clientName: '',
        clientEmail: '',
        clientContact: '',
        clientCountryCode: '+91',
        processing: false,
        nearest_code: {
            'bus': 'Bus Stop',
            'school': 'School',
            'mall': 'Shopping Mall',
            'hospital': 'Hospital',
            'bank': 'Bank',
            'atm': 'ATM',
            'restaurant': 'Restaurant',
            'metro': 'Metro Station',
            'train': 'Train Station',
            'pharmacy': 'Pharmacy'
        },
        furnishing_status: {
            'semi': 'Semi Furnished',
            'bare': 'Bareshell'
        },
        parking_choice: {
            'cover': 'Covered',
            'expose': 'Exposed'
        },
        facing_options: {
            'n': 'North',
            'ne': 'North East',
            'nw': 'North West',
            's': 'South',
            'se': 'South East',
            'sw': 'South west',
            'e': 'East',
            'w': 'West'
        },
        flooring_type: {
            'tile': 'Tiles',
            'wood': 'Wooden',
            'carpet': 'Carpet',
            'bare': 'Bare'
        },
        floor_choice: {
            0: 'GROUND FLOOR',
            1: 'FIRST FLOOR',
            2: 'SECOND FLOOR',
            3: 'THIRD FLOOR'
        }

    },
    methods: {
        get_product_details: function () {
            let that = this;
            that.processing = true;
            that.propertyId = this.getUrlParameter('id');
            axios.get('/api/property/'+that.propertyId)
             .then(function (response) {
                 that.propertyDetails = response.data;
                 that.processing = false;
             })
             .catch(function (response) {
                alert("Failed fetching data for property details.");
                that.processing = false;
             });
        },
        clientQuery: function () {
            let that = this;
            let body = {
                "name": that.clientName,
                "email": that.clientEmail,
                "contact": that.clientContact,
                "country_code": that.clientCountryCode,
                "for_property": that.propertyId
            };
            axios.post('/api/customer_leads/', body)
            .then(function (response) {
                // show_notification("success", "Property Successfully Created.");

            })
            .catch(function (response) {
                alert("error occured.");
                // show_notification("danger", "A fatal error occurred, and this page might not function correctly.")
            })
        },
        getUrlParameter : function (sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        }
    },
    watch: {

    },
    mounted() {
        this.get_product_details();

    },
    computed: {

  }
});
