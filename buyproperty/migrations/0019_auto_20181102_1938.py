# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-11-02 19:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyproperty', '0018_auto_20181102_1920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='contact',
            field=models.CharField(blank=True, default='0000000000', max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='property',
            name='landmark',
            field=models.CharField(blank=True, default='Default Landmark', max_length=200, null=True),
        ),
    ]
