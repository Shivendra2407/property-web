from rest_framework import serializers
from buyproperty.models import CustomerLead, AgentLead, Property, Address, Overlooking


class CustomerLeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomerLead
        fields = "__all__"


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = "__all__"


class AgentLeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = AgentLead
        fields = "__all__"


class PropertySerializer(serializers.ModelSerializer):

    class Meta:
        model = Property
        fields = "__all__"
        depth = 1


class OverlookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Overlooking
        fields = "__all__"


class TopPropertySerializer(serializers.ModelSerializer):

    class Meta:
        model = Property
        fields = ('id', 'property_name', 'media', 'address')
        depth = 1
