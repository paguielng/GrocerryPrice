import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { Link } from 'expo-router';
import { ShoppingCart, ChartBar as BarChart2, Users as Users2, Zap, ArrowRight, Check } from 'lucide-react-native';
import { COLORS, SPACING, FONT_SIZE, FONT_WEIGHT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';

const features = [
  {
    icon: <ShoppingCart size={24} color={COLORS.primary} />,
    title: 'Smart Lists',
    description: 'Create and manage multiple shopping lists with intelligent categorization'
  },
  {
    icon: <BarChart2 size={24} color={COLORS.primary} />,
    title: 'Budget Tracking',
    description: 'Keep track of your spending with detailed analytics and predictions'
  },
  {
    icon: <Users2 size={24} color={COLORS.primary} />,
    title: 'Collaborative Shopping',
    description: 'Share lists with family and friends for efficient shopping'
  },
  {
    icon: <Zap size={24} color={COLORS.primary} />,
    title: 'Real-time Sync',
    description: 'Access your lists across all devices with instant synchronization'
  }
];

const pricing = [
  {
    name: 'Free',
    price: '0',
    features: ['2 shopping lists', 'Basic budget tracking', 'Barcode scanning', '
