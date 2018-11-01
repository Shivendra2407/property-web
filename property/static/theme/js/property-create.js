let property_create_app = new Vue({
    el: "#vue-property-create-app",
    data: {
        newProperty: {
            propertyName: '',
            propertyDesc: '',
            propertyID: '',
            propertyAge: '',
            countryCode: '',
            contactNumber: '',
            address: '',
            rentCharge: 0,
            monthlyMaintenance: 0,
            securityDeposits: 0,
            otherCharges: {},
            floorDetails: '',
            ceilingDetails: '',
            washroomDetails: {
                urinal: undefined,
                wC: undefined
            },
            videoTourURL:'',
            isTop:false,
            landmark: '',
            overlookingList: [],
            mediaList: [],
            nearestList: {},
            pantry: false,
            washroom: false,
            powerBackup: false,
            liftAvailability: false,
            airConditioner: false,
            cctv: false,
            cafeteria: false,
            fireSprinklers: false,
            earthing: false,
            electricalConnection: false,
            furnishingStatus: undefined,
            parking: undefined,
            facing: undefined,
            flooring: undefined,
            unitOfArea: undefined,
            noOfFloors: 0,
            totalNoOfFloors: 0,
            numberOfBasements: 0,
            unitsOnFloors: 0,
            parkingArea: 0,
            ceilingHeight: 0,
            beamHeight: 0,
            leaseTerm: 0,
            carpetArea: 0,
            buildupArea: 0,
            isTop:false

        },
        newAddress:{
            contactName: '',
            streetLine1: '',
            streetLine2: '',
            city: '',
            state: '',
            country: '',
            zip: ''
        },
        overlookingOptions :[],
        otherId: -1,
        nearestId: 0,
        imageSlider: {
            currentIndex: 0,
            listLength: 0,
        },
        videoSlider: {
            currentIndex: 0,
            listLength: 0,
        },
        propertyImages:{
            imageList: [],
        },
        propertyVideos: [],
        videoTours:{
            list: [],
        },
        otherCharges:[],
        nearest:[]
    },
    methods: {
        validateMandatoryFields:function(){
          let that = this;
          if(!that.newProperty.propertyName.length || !that.newProperty.contactNumber.length || !that.newAddress.contactName.length || !that.newAddress.streetLine1.length || !that.newProperty.propertyID.length || !that.newProperty.countryCode.length){
              return false;
          }
          return true;
        },
        createProperty: function(){
            let that = this;
            // if (!that.validateMandatoryFields()){
            //     alert("Please fill fields marked mandatory with a red asterisk");
            //     return
            // }
            //that.newProperty.nearestList = {};
            //that.newProperty.otherCharges = {};
            // for (let i = 0; i<that.nearestId; i++){
            //     that.newProperty.nearestList[$("#nearestList-title-"+i).val()] = $("#nearestList-distance-"+i).val();
            // }
            // for (let i = 0; i<that.otherId; i++){
            //     that.newProperty.otherCharges[$("#otherCharges-charge-"+i).val()] = $("#otherCharges-value-"+i).val();
            // }
            that.populateCharges();
            that.populateNearest();

            let newAddress = {
                "name": that.newAddress.contactName,
                "line_1": that.newAddress.streetLine1,
                "line_2": that.newAddress.streetLine2,
                "city": that.newAddress.city,
                "state": that.newAddress.state,
                "country": that.newAddress.country,
                "zip": that.newAddress.zip
            };
            let property_body = {
                "property_name": that.newProperty.propertyName,
                "description": that.newProperty.propertyDesc,
                "property_id": that.newProperty.propertyID,
                "age": that.newProperty.propertyAge,
                "country_code": that.newProperty.countryCode,
                "contact": that.newProperty.contactNumber,
                "address": newAddress,
                "rental_value": that.newProperty.rentCharge,
                "monthly_maintenance": that.newProperty.monthlyMaintenance,
                "security_deposit": that.newProperty.securityDeposits,
                "other_charges": that.otherCharges,
                "flooring_details": that.newProperty.floorDetails,
                "ceiling_details": that.newProperty.ceilingDetails,
                "washroom_details": that.newProperty.washroomDetails,
                "landmark": that.newProperty.landmark,
                "overlooking": that.newProperty.overlookingList,
                "media": that.propertyImages.imageList,
                "nearest": that.nearest,
                "pantry": that.newProperty.pantry,
                "washroom": that.newProperty.washroom,
                "power_backup": that.newProperty.powerBackup,
                "lift_availability": that.newProperty.liftAvailability,
                "a_c": that.newProperty.airConditioner,
                "cctv": that.newProperty.cctv,
                "cafeteria": that.newProperty.cafeteria,
                "fire_sprinklers": that.newProperty.fireSprinklers,
                "earthing": that.newProperty.earthing,
                "electrical_con": that.newProperty.electricalConnection,
                "furnishing_status": that.newProperty.furnishingStatus,
                "parking": that.newProperty.parking,
                "facing": that.newProperty.facing,
                "flooring": that.newProperty.flooring,
                "unit_of_area": that.newProperty.unitOfArea,
                "number_of_floors": that.newProperty.noOfFloors,
                "total_number_of_floors": that.newProperty.totalNoOfFloors,
                "number_of_basements": that.newProperty.numberOfBasements,
                "units_on_floor": that.newProperty.units_on_floor,
                "parking_area": that.newProperty.parkingArea,
                "ceiling_height": that.newProperty.ceilingHeight,
                "beam_height": that.newProperty.beamHeight,
                "lease_term": that.newProperty.leaseTerm,
                "carpet_area": that.newProperty.carpetArea,
                "buildup_area": that.newProperty.buildupArea,
                "is_top": that.newProperty.isTop,
                "video_tour":that.videoTours.list

            };
            axios.post('/api/property/', property_body)
                .then(function (response) {
                    // show_notification("success", "Property Successfully Created.");
                    window.location.href =  "/control/dash/properties/";
                })
                .catch(function (response) {
                    // show_notification("danger", "A fatal error occurred, and this page might not function correctly.")
                })


        },
        addOtherCharge: function () {
            let that = this;
            that.otherId += 1;
            $("#other-charge-parent").append('<div class="col-md-8">\n' +
                '                                            <div class="form-group">\n' +
                '                                                <input class="form-control" id="charge-'+that.otherId+'" type="text" required>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                        <div class="col-md-4">\n' +
                '                                            <div class="form-group">\n' +
                '                                                <input class="form-control" onKeyPress="if(this.value.length===7) return false;" id="value-'+that.otherId+'" type="number" required>\n' +
                '                                            </div>\n' +
                '                                        </div>');

        },
        addVideoUrlFields:function(){
            let that = this;
            let urls_dict = {};
            const index = generate_unique_number();
            urls_dict["url"+index] = "";
            urls_dict["index"] = index;
            that.propertyVideos.push(urls_dict);
        },
        removeVideoUrlFields:function(index){
            let that = this;
            that.propertyVideos.splice(index, 1)
        },
        populateCharges :function(){
            let that=this;
            let listOfKey = [];
            let listOfVal = [];
            $('#other-charge-parent > div > div').children('input').each(function () {
                if(this.id.toString()[0]==='c')
                {
                    listOfKey.push(this.value);
                }
                else {
                    listOfVal.push(parseInt(this.value));
                }
                });
            for(let i=0; i<listOfKey.length;i++){
                that.otherCharges[listOfKey[i]] = listOfVal[i];
            }
            debugger;
            console.log(that.otherCharges);
        },
        populateNearest :function(){
            let that=this;
            let listOfKey = [];
            let listOfVal = [];
            let element = $('#nearest-building > div');
            element.children('select').each(function () {
                listOfKey.push(this.value);
            });
            element.children('input').each(function () {
                listOfVal.push(parseFloat(this.value));
            });

            for(let i=0; i<listOfKey.length;i++){
                that.nearest[listOfKey[i]] = listOfVal[i];
            }
            console.log(that.nearest);
        },
        addNearest: function () {
            let that = this;
            $("#nearest-building").append('<div class="col-md-8">\n' +
                '                                            <select name="parking" class="form-control mb-20" id="nearestList-title-'+that.nearestId+'" required>\n' +
                '                                                <option disabled selected>Choose Any Option</option>\n' +
                '                                                <option value="bus">Bus Stop</option>\n' +
                '                                                <option value="school">School</option>\n' +
                '                                                <option value="mall">Shopping Mall</option>\n' +
                '                                                <option value="hospital">Hospital</option>\n' +
                '                                                <option value="bank">Bank</option>\n' +
                '                                                <option value="atm">ATM</option>\n' +
                '                                                <option value="restaurant">Restaurant</option>\n' +
                '                                                <option value="metro">Metro Station</option>\n' +
                '                                                <option value="train">Train Station</option>\n' +
                '                                                <option value="pharmacy">Pharmacy</option>\n' +
                '                                            </select>\n' +
                '                                        </div>\n' +
                '                                        <div class="col-md-4">\n' +
                '                                            <input type="number" onKeyPress="if(this.value.length===2) return false;" id="nearestList-distance-'+that.nearestId+'" class="form-control mb-20" required/>\n' +
                '                                        </div>');

            that.nearestId += 1;
        },
        get_country_codes: function(){
            let that = this;
            let country_codes = $('#select-country-code');
            country_codes.empty();
            country_codes.append('<option selected="true" disabled>Choose Country Code</option>');
            country_codes.prop('selectedIndex', 0);

            const url = '/api/country_codes/';

            // Populate dropdown with list of country codes
            $.getJSON(url, function (data) {
              $.each(data, function (key, entry) {
                country_codes.append($('<option></option>').attr('value', entry.id).text(entry.code));
              })
            });
        },

        // loads categories and tags
        loadOverlooking: function (urlParam) {
            let that = this;
             axios.get("/api/overlooking/", {
            })
            .then(function (response) {
                 that.overlookingOptions = response.data;
                 that.initSelect2();
            })
            .catch(function (response) {
                alert("A fatal error occurredfetching overlooking options, and this page might not function correctly.")
            });
        },
        initSelect2: function () {
            let that = this;
            let overlookingElement = $('#select-overlooking');

            overlookingElement.select2({
                placeholder: "overlooking",
                theme: "classic"
            }).on('select2:selecting select2:unselecting', function (e) {
                if (e.params.name === 'select') {
                    that.newProperty.overlookingList.push(e.params.args.data.id);
                }
                else if(e.params.name === 'unselect'){
                    that.newProperty.overlookingList.slice(_.indexOf(that.newProperty.overlookingList, e.params.args.data.id), 1)
                }
            });
        },
        get_overlooking: function(){
            let that = this;
            let overlooking = $('#select-overlooking');
            overlooking.empty();
            // overlooking.append('<option selected="true" id="overlooking-choose" disabled>Choose Any Option</option>');
            // overlooking.prop('selectedIndex', 0);

            const url = '/api/overlooking/';

            $.getJSON(url, function (data) {
              $.each(data, function (key, entry) {
                overlooking.append($('<option></option>').attr('value', entry.id).text(entry.name)).select2()

                //     .on('change', function () {
                //     if($(".select2-selection__choice").text() === "×Choose Any Option"){
                //         $(".select2-selection__choice").remove();
                //     }
                //     //that.newProperty.overlookingList = [];
                //     //that.newProperty.overlookingList.push($("#select-overlooking option:selected").text());
                //
                // })
                    .on('select2: selecting select:unselecting',function (e) {
                    if (e.params.name === 'select') {
                        that.newProperty.overlookingList.push(e.params.args.data.id);
                    }
                    else if(e.params.name === 'unselect'){
                        that.newProperty.overlookingList.splice(_.indexOf(that.newProperty.overlookingList, e.params.args.data.id), 1)
                    }
                });
              })
            });
        },
        selectPropertyImage: function () {
            $("#select-image-hidden").click();
        },
        uploadPropertyImage: function (input) {
            let that = this;
            let unitArray = ['Bytes', 'KB', 'MB', 'GB'];
            if (input.target.files[0]){
                $.each(input.target.files, function (index, item) {
                    let size = item.size;
                    let i=0;
                    while(size>900)
                    {
                        size/=1024;
                        i++;
                    }
                    let actualSize = (Math.round(size * 100) / 100);
                    if (i>0 && actualSize > 100) {
                        alert("File size must be less than 10 mb, this file is too big " + actualSize + " " + unitArray[i]);
                        return
                    }
                    // Generate unique ID for all images
                    let image_id = 1212;

                    // Read image and append into doc
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        that.propertyImages.imageList.push({"image":e.target.result,"type":"b", "title":"", "description":"", "defaultInGroup":false});
                        that.imageSlider.listLength += 1;
                    };
                    reader.readAsDataURL(input.target.files[index]);
                });
                that.propertyImages.isPreviewImageActive = true;
                $("#select-image-hidden").val("");
            } else {
                alert("No files were selected. Please select at least one file.");
            }
        },
        removeImage: function (imageIndex) {
            let that = this;
            that.propertyImages.imageList.splice(imageIndex, 1);
            that.imageSlider.listLength -= 1;
            (that.propertyImages.imageList.length === 0)? that.propertyImages.isPreviewImageActive = false: that.propertyImages.isPreviewImageActive = true;
        },
        selectVideoTour: function () {
            $("#select-video-hidden").click();
        },
        uploadVideoTour: function (input) {
            let that = this;
            let unitArray = ['Bytes', 'KB', 'MB', 'GB'];
            if (input.target.files[0]){
                $.each(input.target.files, function (index, item) {
                    let size = item.size;
                    let i=0;
                    while(size>900)
                    {
                        size/=1024;
                        i++;
                    }
                    let actualSize = (Math.round(size * 100) / 100);
                    if (i>1 && actualSize > 10) {
                        alert("File size must be less than 10 mb, this file is too big " + actualSize + " " + unitArray[i]);
                        return
                    }
                    // Generate unique ID for all images
                    let image_id = 1212;

                    // Read image and append into doc
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        that.videoTours.list.push({"image":e.target.result, "title":"", "description":"", "defaultInGroup":false});
                        that.videoSlider.listLength += 1;
                    };
                    reader.readAsDataURL(input.target.files[index]);
                });
                that.videoTours.isPreviewImageActive = true;
                $("#select-image-hidden").val("");
            } else {
                alert("No files were selected. Please select at least one file.");
            }
        },
        removeVideoTour: function (imageIndex) {
            let that = this;
            that.videoTours.list.splice(imageIndex, 1);
            that.videoSlider.listLength -= 1;
            (that.videoTours.list.length === 0)? that.videoTours.isPreviewImageActive = false: that.videoTours.isPreviewImageActive = true;
        }



    },
    watch: {

    },
    mounted() {
        this.get_country_codes();
        this.loadOverlooking();
    },
    computed: {

  }
});