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
    features: ['2 shopping lists', 'Basic budget tracking', 'Barcode scanning', 'Single device sync'],
  },
  {
    name: 'Premium',
    price: '4.99',
    features: ['Unlimited lists', 'Advanced analytics', 'Family sharing', 'Priority support'],
    popular: true,
  },
  {
    name: 'Business',
    price: '9.99',
    features: ['Team collaboration', 'Custom branding', 'API access', 'Dedicated support'],
  },
];

export default function LandingPage() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Shopping List</Text>
        <Text style={styles.heroSubtitle}>
          Organize your shopping lists, track your budget, and shop smarter with our intelligent shopping companion
        </Text>
        <View style={styles.heroButtons}>
          <Link href="/demo" asChild>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Try Demo</Text>
              <ArrowRight size={20} color={COLORS.background} />
            </TouchableOpacity>
          </Link>
          <Link href="/about" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Learn More</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg' }}
          style={styles.heroImage}
        />
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Our App?</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View style={styles.featureIcon}>{feature.icon}</View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Pricing Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Simple Pricing</Text>
        <View style={styles.pricingContainer}>
          {pricing.map((plan, index) => (
            <View 
              key={index} 
              style={[
                styles.pricingCard,
                plan.popular && styles.popularPricingCard
              ]}
            >
              {plan.popular && (
                <View style={styles.popularBadge}>
                  <Text style={styles.popularBadgeText}>Most Popular</Text>
                </View>
              )}
              <Text style={styles.planName}>{plan.name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.currencySymbol}>$</Text>
                <Text style={styles.price}>{plan.price}</Text>
                <Text style={styles.period}>/month</Text>
              </View>
              <View style={styles.planFeatures}>
                {plan.features.map((feature, featureIndex) => (
                  <View key={featureIndex} style={styles.planFeatureItem}>
                    <Check size={16} color={COLORS.primary} />
                    <Text style={styles.planFeatureText}>{feature}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity 
                style={[
                  styles.planButton,
                  plan.popular && styles.popularPlanButton
                ]}
              >
                <Text 
                  style={[
                    styles.planButtonText,
                    plan.popular && styles.popularPlanButtonText
                  ]}
                >
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 ShoppingListApp. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  hero: {
    padding: SPACING.xl,
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
  },
  heroTitle: {
    fontSize: Platform.OS === 'web' ? 48 : FONT_SIZE.xxl,
    fontFamily: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  heroSubtitle: {
    fontSize: FONT_SIZE.lg,
    fontFamily: FONT_WEIGHT.regular,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.xl,
    maxWidth: 600,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.full,
    gap: SPACING.xs,
  },
  primaryButtonText: {
    color: COLORS.background,
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_WEIGHT.medium,
  },
  secondaryButton: {
    backgroundColor: COLORS.background,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  secondaryButtonText: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_WEIGHT.medium,
  },
  heroImage: {
    width: Platform.OS === 'web' ? 800 : '100%',
    height: 400,
    borderRadius: BORDER_RADIUS.lg,
  },
  section: {
    padding: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONT_SIZE.xxl,
    fontFamily: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  featuresGrid: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: SPACING.lg,
    justifyContent: 'center',
  },
  featureCard: {
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    width: Platform.OS === 'web' ? 280 : '100%',
    ...SHADOWS.medium,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  featureTitle: {
    fontSize: FONT_SIZE.lg,
    fontFamily: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  featureDescription: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_WEIGHT.regular,
    color: COLORS.textSecondary,
  },
  pricingContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    gap: SPACING.lg,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  pricingCard: {
    backgroundColor: COLORS.card,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.lg,
    width: Platform.OS === 'web' ? 300 : '100%',
    ...SHADOWS.medium,
  },
  popularPricingCard: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    transform: [{ scale: 1.05 }],
  },
  popularBadge: {
    position: 'absolute',
    top: -15,
    right: SPACING.xl,
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.full,
  },
  popularBadgeText: {
    color: COLORS.background,
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_WEIGHT.medium,
  },
  planName: {
    fontSize: FONT_SIZE.xl,
    fontFamily: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: SPACING.xl,
  },
  currencySymbol: {
    fontSize: FONT_SIZE.xl,
    fontFamily: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
  },
  price: {
    fontSize: 48,
    fontFamily: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
  },
  period: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_WEIGHT.regular,
    color: COLORS.textSecondary,
  },
  planFeatures: {
    marginBottom: SPACING.xl,
  },
  planFeatureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    gap: SPACING.xs,
  },
  planFeatureText: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_WEIGHT.regular,
    color: COLORS.textSecondary,
  },
  planButton: {
    backgroundColor: COLORS.background,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
  },
  popularPlanButton: {
    backgroundColor: COLORS.primary,
  },
  planButtonText: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_WEIGHT.medium,
    color: COLORS.primary,
  },
  popularPlanButtonText: {
    color: COLORS.background,
  },
  footer: {
    padding: SPACING.xl,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
  },
  footerText: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_WEIGHT.regular,
    color: COLORS.textSecondary,
  },
});
