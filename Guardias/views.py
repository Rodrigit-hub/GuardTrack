from rest_framework import viewsets

from .serializer import NovedadSerializer, ObjetivoSerializer, TipoNovedadSerializer, UbicacionSerializer
from .models.tiponovedad import TipoNovedad
from .models.ubicacion import Ubicacion
from .models.objetivo import Objetivo
from .models.novedad import Novedad


# Create your views here.
class TipoNovedadView(viewsets.ModelViewSet):
    serializer_class = TipoNovedadSerializer
    queryset = TipoNovedad.objects.all()

class UbicacionView(viewsets.ModelViewSet):
    serializer_class = UbicacionSerializer
    queryset = Ubicacion.objects.all()

class ObjetivoView(viewsets.ModelViewSet):
    serializer_class = ObjetivoSerializer
    queryset = Objetivo.objects.all()

class NovedadView(viewsets.ModelViewSet):
    serializer_class = NovedadSerializer
    queryset = Novedad.objects.all()
