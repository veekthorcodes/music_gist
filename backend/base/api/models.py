# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
from django.db.models.signals import pre_save
from django.utils.text import slugify
from django.conf import settings


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, null=True, blank=True)
    venue = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    performers = models.CharField(max_length=255)
    date = models.DateField()
    time = models.CharField(max_length=255)
    description = models.TextField()
    image = CloudinaryField('Image', overwrite=True, resource_type="image", transformation={
                            "quality": "auto:eco"}, format="jpg")

    def get_image_url(self):
        return self.image.url

    def __str__(self):
        return self.name


def add_slug(sender, instance, *args, **kwargs):
    print(instance)
    instance.slug = slugify(instance.name)


pre_save.connect(add_slug, sender=Event)
