from django.db import models

# Create your models here.

#Modelo para la entidad TipoDocumento
class TipoDocumento(models.Model):
    nombre = models.CharField(max_length = 30)
    descripcion = models.CharField(max_length = 60)

#Modelo para la entidad Ciudad
class Ciudad(models.Model):
    nombre = models.CharField(max_length = 30)
    descripcion = models.CharField(max_length = 60)

#Modelo para la entidad Persona
class Persona(models.Model):
    nombres = models.CharField(max_length = 30)
    apellidos = models.CharField(max_length = 30)
    idtipodocumento = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE)
    documento = models.CharField(max_length=30)
    idciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    fechanacimiento = models.DateField()
    email = models.CharField(max_length=40)
    telefono=models.IntegerField()
    usuario=models.CharField(max_length=30)
    password=models.CharField(max_length=30)