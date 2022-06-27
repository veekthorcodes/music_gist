from django.urls import path 
from .views import (
    EventListView,
    EventDetailView,
    EventCreateView,
    EventUpdateView,
    EventDeleteView
)

urlpatterns = [
    path("events/", EventListView.as_view(), name="list"),
    path("events/create/", EventCreateView.as_view(), name="create"),
    path("events/<slug:slug>/", EventDetailView.as_view(), name="detail"),
    path("events/<slug:slug>/update/", EventUpdateView.as_view(), name="update"),
    path("events/<slug:slug>/delete/", EventDeleteView.as_view(), name="delete"),
]
