import Header from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Users, Target, Award, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Interns", value: "50,000+" },
    { icon: Target, label: "Partner Organizations", value: "2,500+" },
    { icon: Award, label: "Successful Placements", value: "85%" },
    { icon: MapPin, label: "Districts Covered", value: "650+" },
  ];

  const objectives = [
    "Provide practical work experience to youth aged 21-24",
    "Bridge the gap between academic knowledge and industry requirements",
    "Enhance employability through skill development",
    "Promote entrepreneurship and innovation among youth",
    "Support inclusive growth across all regions of India",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="government-section">
        <div className="government-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About PM Internship Scheme
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering India's youth through meaningful internship
              opportunities and skill development programs under the visionary
              leadership of Honorable Prime Minister Shri Narendra Modi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="government-card text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="government-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Mission Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The PM Internship Scheme aims to provide opportunities for
                  practical learning and skill development to young Indians,
                  enabling them to gain valuable work experience while
                  contributing to the nation's growth. Through strategic
                  partnerships with government organizations, PSUs, and private
                  sector companies, we are building a skilled workforce ready
                  for the challenges of tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="government-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Vision 2047
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  As India progresses towards becoming a developed nation by
                  2047, the PM Internship Scheme serves as a cornerstone in
                  preparing our youth for leadership roles across various
                  sectors. We envision an India where every young person has
                  access to quality internship opportunities that align with
                  their aspirations and national needs.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="government-card mb-12">
            <CardHeader>
              <CardTitle>Key Objectives</CardTitle>
              <CardDescription>
                The scheme focuses on comprehensive development of India's youth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 shrink-0">
                      {index + 1}
                    </Badge>
                    <p className="text-muted-foreground">{objective}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="government-card">
            <CardHeader>
              <CardTitle>Implementation Partners</CardTitle>
              <CardDescription>
                Collaborating with leading organizations across sectors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">
                    Government Sector
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Central Ministries, State Governments, PSUs
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">
                    Private Sector
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fortune 500 companies, Startups, MSMEs
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">
                    NGOs & Institutions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Research institutes, Social organizations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
