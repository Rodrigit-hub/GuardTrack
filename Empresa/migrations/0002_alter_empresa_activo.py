# Generated by Django 5.1.1 on 2024-09-19 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Empresa', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empresa',
            name='activo',
            field=models.BooleanField(),
        ),
    ]
