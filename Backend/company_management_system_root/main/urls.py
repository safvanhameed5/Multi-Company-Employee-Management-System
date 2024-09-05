from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DepartmentViewSet, RoleViewSet, AttendanceViewSet, LeaveViewSet, CompanyViewSet, EmployeeViewSet

router = DefaultRouter()
router.register(r'company', CompanyViewSet)
router.register(r'employee', EmployeeViewSet)
router.register(r'department', DepartmentViewSet)
router.register(r'role', RoleViewSet)
router.register(r'attendance', AttendanceViewSet)
router.register(r'leave', LeaveViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

'''urlpatterns = [
    path('company/', views.company),
    path('company/<id>/', views.company),
    path('employee/', views.company),
    path('employee/<id>/', views.company),
]'''