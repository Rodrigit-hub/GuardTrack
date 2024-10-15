from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from Guardias import views

#api versioning
router = routers.DefaultRouter()
router.register(r"tipoNovedad", views.TipoNovedadView, 'tiponovedad')
router.register(r"ubicacion", views.UbicacionView, 'ubicacion')
router.register(r"objetivo", views.ObjetivoView, 'objetivo')
router.register(r"novedad", views.NovedadView, 'novedad')


urlpatterns = [
    path("guardias_api/", include(router.urls)),
    path("docs/", include_docs_urls(title="Guardias API"))
]


