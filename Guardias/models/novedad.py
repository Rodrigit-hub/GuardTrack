# FALTAN LOS IMPORT

from tiponovedad import TipoNovedad


class Novedad(models.Model):
    tipoNovedad = models.ForeignKey(TipoNovedad, on_delete=models.CASCADE)
    fechaHoraNovedad = models.DateTimeField
    descripcion = models.CharField(200)

    
