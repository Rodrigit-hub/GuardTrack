from rest_framework import viewsets
from .serializer import EmpresaSerializer
from .models import Empresa


# Create your views here.
class EmpresaView(viewsets.ModelViewSet):
    serializer_class = EmpresaSerializer
    queryset = Empresa.objects.all()
