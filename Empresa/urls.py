from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from Empresa import views


#api versioning
router = routers.DefaultRouter()
router.register(r"empresa", views.EmpresaView, 'empresa')

urlpatterns = [
    path("empresa_api/", include(router.urls)),
    path("docs/", include_docs_urls(title="Empresa API"))
      
] 
