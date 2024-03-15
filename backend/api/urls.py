from django.urls import path
from . import views



urlpatterns=[
    path('',views.apiOverview,name='apiOverview'),
    path('all-event/',views.ShowAll,name='all-event'),
    path('user-event/<int:pk>/',views.ShowUserEvent,name='user-event'),
    path('create/',views.Create,name='create-event'),

    # path('create-user/',views.CreateUser,name='create-user'),

  path('register/', views.UserRegister.as_view(), name='register'),
	path('login/', views.UserLogin.as_view(), name='login'),
	path('logout/', views.UserLogout.as_view(), name='logout'),
	path('user/', views.UserView.as_view(), name='user'),
]

