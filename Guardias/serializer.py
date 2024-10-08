from rest_framework import serializers

from Guardias.models.novedad import Novedad
from Guardias.models.objetivo import Objetivo
from Guardias.models.tiponovedad import TipoNovedad
from Guardias.models.ubicacion import Ubicacion

class TipoNovedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoNovedad
        fields = '__all__'

class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicacion
        fields = '__all__'

class ObjetivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objetivo
        fields = '__all__'

class NovedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Novedad
        fields = '__all__'


