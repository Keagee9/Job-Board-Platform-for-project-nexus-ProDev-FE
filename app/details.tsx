
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const JobDetailsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <Ionicons name="bookmark-outline" size={24} color="white" />
        </View>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
          <View style={styles.jobHeader}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' }} style={styles.logo} />
            <View>
              <Text style={styles.jobTitle}>UI Designer</Text>
              <Text style={styles.companyName}>Netflix</Text>
            </View>
          </View>

          <Text style={styles.location}>Jakarta, Indonesia - Onsite</Text>
          <Text style={styles.salary}>$ 12,000</Text>

          <View style={styles.jobInfoContainer}>
            <View style={styles.jobInfoBox}>
              <Text style={styles.jobInfoTitle}>Experience</Text>
              <Text style={styles.jobInfoText}>2 - 5 Years</Text>
            </View>
            <View style={styles.jobInfoBox}>
              <Text style={styles.jobInfoTitle}>Job Type</Text>
              <Text style={styles.jobInfoText}>Fulltime</Text>
            </View>
            <View style={styles.jobInfoBox}>
              <Text style={styles.jobInfoTitle}>Level</Text>
              <Text style={styles.jobInfoText}>Entry level</Text>
            </View>
          </View>

          <Text style={styles.updatedDate}>Updated 23 days ago</Text>

          <View style={styles.managerSection}>
            <Text style={styles.sectionTitle}>This job post is managed by</Text>
            <View style={styles.managerInfo}>
              <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.managerPhoto} />
              <View>
                <Text style={styles.managerName}>Nabila Nanda</Text>
                <Text style={styles.managerStatus}>Online 2 days ago</Text>
              </View>
            </View>
          </View>

          <View style={styles.skillsSection}>
            <Text style={styles.sectionTitle}>Must Have Skills</Text>
            <View style={styles.skillsContainer}>
              {[
                'UI Design',
                'Teamwork',
                'UX Design',
                'Adaptability',
                'Critical Thinking',
                'Analytical Skills',
                'Creative Design',
                'Communication Skills',
              ].map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Job Description</Text>
            <Text style={styles.descriptionText}>
              Netflix is seeking a talented UI Designer to join our design team. In this role, you will be responsible for crafting innovative and engaging user interfaces for our streaming platform. You will work closely with UX designers, product managers, and engineers to create a seamless and intuitive user experience.
            </Text>
          </View>

          <View style={styles.responsibilitiesSection}>
            <Text style={styles.sectionTitle}>Responsibilities</Text>
            <Text style={styles.listItem}>• Design user interfaces that are visually appealing and easy to use.</Text>
            <Text style={styles.listItem}>• Collaborate with cross-functional teams to define and implement innovative solutions for the product direction, visuals, and experience.</Text>
            <Text style={styles.listItem}>• Create wireframes, storyboards, user flows, process flows, and site maps to communicate interaction and design ideas.</Text>
            <Text style={styles.listItem}>• Conduct user research and evaluate user feedback to improve and iterate on design solutions.</Text>
            <Text style={styles.listItem}>• Ensure designs are consistent with the Netflix brand and design guidelines.</Text>
            <Text style={styles.listItem}>• Stay up to date with the latest UI trends, techniques, and technologies.</Text>
          </View>

          <View style={styles.requirementsSection}>
            <Text style={styles.sectionTitle}>Requirements</Text>
            <Text style={styles.listItem}>• Proven UI design experience with a strong portfolio.</Text>
            <Text style={styles.listItem}>• Proficiency in design and prototyping tools such as Figma, Sketch, Adobe XD, or similar.</Text>
            <Text style={styles.listItem}>• Excellent visual design skills with a keen eye for detail.</Text>
            <Text style={styles.listItem}>• Solid experience in creating wireframes, storyboards, user flows, and process flows.</Text>
            <Text style={styles.listItem}>• Strong communication skills and the ability to articulate design decisions.</Text>
            <Text style={styles.listItem}>• Bachelor's degree in Design, Human-Computer Interaction (HCI), or related field is preferred.</Text>
          </View>

          <View style={styles.benefitsSection}>
            <Text style={styles.sectionTitle}>Benefits</Text>
            <Text style={styles.listItem}>• Competitive salary and benefits package.</Text>
            <Text style={styles.listItem}>• Health, dental, and vision insurance.</Text>
            <Text style={styles.listItem}>• Unlimited vacation policy.</Text>
            <Text style={styles.listItem}>• Remote work flexibility.</Text>
            <Text style={styles.listItem}>• Access to Netflix streaming service and content.</Text>
            <Text style={styles.listItem}>• Professional development opportunities.</Text>
          </View>

          <View style={styles.aboutCompanySection}>
            <Text style={styles.sectionTitle}>About The Company</Text>
            <View style={styles.companyInfo}>
              <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' }} style={styles.logo} />
              <View>
                <Text style={styles.companyName}>Netflix</Text>
                <Text style={styles.companyIndustry}>Streaming Online . 30 - 120 employees</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
            <Text style={styles.officeAddress}>Office Address</Text>
            <Text style={styles.location}>Los Gatos, California, United States</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreJobs}>View more jobs from this company</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.similarJobsSection}>
            <Text style={styles.sectionTitle}>Similar jobs for you</Text>
            {[
              { company: 'Netflix', title: 'Accounting', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' },
              { company: 'Telegram', title: 'UI designer', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png' },
              { company: 'Autodesk', title: 'Human Resources', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png' },
              { company: 'Twitch', title: 'Human Resources', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png' },
              { company: 'Procreate', title: 'Social Media Specialist', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968804.png' },
            ].map((job, index) => (
              <View key={index} style={styles.jobCard}>
                <Image source={{ uri: job.logo }} style={styles.logo} />
                <View style={styles.jobCardContent}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.companyName}>{job.company}</Text>
                  <Text style={styles.location}>Jakarta, Indonesia - Onsite</Text>
                  <View style={styles.tagsContainer}>
                    <Text style={styles.tag}>Remote</Text>
                    <Text style={styles.tag}>Contract</Text>
                    <Text style={styles.tag}>Junior</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.viewDetails}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  jobTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  companyName: {
    color: '#A9A9A9',
    fontSize: 16,
  },
  location: {
    color: '#A9A9A9',
    fontSize: 14,
    marginBottom: 4,
  },
  salary: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  jobInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  jobInfoBox: {
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    width: '30%',
  },
  jobInfoTitle: {
    color: '#A9A9A9',
    fontSize: 12,
    marginBottom: 4,
  },
  jobInfoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  updatedDate: {
    color: '#A9A9A9',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  managerSection: {
    marginBottom: 16,
  },
  managerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
  },
  managerPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  managerName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  managerStatus: {
    color: '#A9A9A9',
    fontSize: 12,
  },
  skillsSection: {
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    margin: 4,
  },
  skillText: {
    color: 'white',
    fontSize: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionSection: {
    marginBottom: 16,
  },
  descriptionText: {
    color: '#A9A9A9',
    fontSize: 14,
    lineHeight: 20,
  },
  responsibilitiesSection: {
    marginBottom: 16,
  },
  requirementsSection: {
    marginBottom: 16,
  },
  benefitsSection: {
    marginBottom: 16,
  },
  listItem: {
    color: '#A9A9A9',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  aboutCompanySection: {
    marginBottom: 16,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  companyIndustry: {
    color: '#A9A9A9',
    fontSize: 12,
  },
  officeAddress: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  viewMoreJobs: {
    color: '#4A90E2',
    textDecorationLine: 'underline',
  },
  similarJobsSection: {
    marginBottom: 16,
  },
  jobCard: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  jobCardContent: {
    flex: 1,
    marginLeft: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  tag: {
    color: '#A9A9A9',
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    fontSize: 12,
  },
  viewDetails: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});

export default JobDetailsScreen;
