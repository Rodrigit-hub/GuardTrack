from django.contrib import admin

from Guardias.models.novedad import Novedad
from Guardias.models.objetivo import Objetivo
from Guardias.models.ubicacion import Ubicacion
from .models.tiponovedad import TipoNovedad

# Register your models here.
admin.site.register(TipoNovedad)
admin.site.register(Ubicacion)
admin.site.register(Objetivo)
admin.site.register(Novedad)
