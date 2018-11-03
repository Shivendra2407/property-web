# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-11-02 19:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyproperty', '0017_auto_20181102_1907'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='description',
            field=models.TextField(blank=True, default='Default Description', null=True),
        ),
        migrations.AlterField(
            model_name='media',
            name='title',
            field=models.CharField(blank=True, default='Media Title', max_length=220, null=True),
        ),
        migrations.AlterField(
            model_name='media',
            name='type',
            field=models.CharField(blank=True, choices=[('b', 'Banner'), ('f', 'Floor Plan')], default='b', max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='othercharges',
            name='charge_desc',
            field=models.CharField(blank=True, default='default key', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='overlooking',
            name='name',
            field=models.CharField(blank=True, default='Default', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='property',
            name='property_id',
            field=models.CharField(default='PROP_ID', max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='property',
            name='property_name',
            field=models.CharField(blank=True, default='PROP_NAME', max_length=250),
        ),
        migrations.AlterField(
            model_name='video',
            name='title',
            field=models.CharField(blank=True, default='Video Title', max_length=200),
        ),
        migrations.AlterField(
            model_name='video',
            name='type',
            field=models.CharField(blank=True, choices=[('b', 'Banner'), ('t', 'Tour')], default='b', max_length=1, null=True),
        ),
    ]
