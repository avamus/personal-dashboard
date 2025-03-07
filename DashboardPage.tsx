"use client"

import React from "react"
import Image from "next/image"
import { Info, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, AlertTriangle, GraduationCap, BarChartIcon as ChartBar } from "lucide-react"

const profile = {
  nurturer: {
    score: 85,
    description:
      "Nurturers are empathetic, supportive, and focused on building strong relationships in their real estate dealings.",
    explanation: `Your high Nurturer score of 85% indicates that you have an exceptional ability to understand and connect with clients on an emotional level. This is a significant strength in the real estate industry, where trust and rapport are crucial.

Key Strengths:
1. Emotional Intelligence: You excel at reading and responding to clients' emotional needs, making them feel understood and valued.
2. Relationship Building: Your natural ability to form strong, lasting relationships can lead to a loyal client base and frequent referrals.
3. Active Listening: You likely have a talent for truly hearing what clients are saying, both verbally and non-verbally.
4. Conflict Resolution: Your empathetic nature allows you to navigate and resolve conflicts smoothly, ensuring deals stay on track.

Areas for Leverage:
• Focus on luxury or high-end markets where personal touch and attention to detail are highly valued.
• Develop a specialty in helping first-time homebuyers who may need extra support and guidance.
• Consider partnering with investors or developers who may benefit from your people skills in community relations.

Potential Challenges:
• Be cautious of becoming too emotionally invested in deals, which could cloud your judgment.
• Ensure you're not neglecting the analytical aspects of real estate in favor of the relational elements.

Development Opportunities:
1. Enhance your negotiation skills to complement your relationship-building abilities.
2. Study market trends and financial analysis to balance your emotional intelligence with strong analytical skills.
3. Practice setting boundaries to maintain professional relationships without becoming overly involved.

Remember, your high Nurturer score is a powerful asset in real estate. By leveraging this strength while addressing potential blind spots, you can create a unique and highly effective approach to your real estate career.`,
  },
  integrator: {
    score: 75,
    description:
      "Integrators excel at bringing together different aspects of real estate deals and coordinating between various parties.",
    explanation: `Your strong Integrator score of 75% demonstrates your adeptness at managing complex deals and coordinating between different stakeholders. This skill is invaluable in the multifaceted world of real estate transactions.

Key Strengths:
1. Project Management: You have a natural talent for overseeing multiple moving parts of a deal simultaneously.
2. Stakeholder Coordination: Your ability to liaise between buyers, sellers, agents, lawyers, and other parties is highly developed.
3. Problem-Solving: You excel at finding solutions that satisfy multiple parties, keeping deals on track.
4. Big Picture Thinking: You can see how various elements of a transaction fit together, allowing for smoother processes.

Areas for Leverage:
• Specialize in complex, multi-party transactions such as commercial real estate or large residential developments.
• Consider roles in real estate development where coordinating between architects, contractors, and city planners is crucial.
• Explore opportunities in real estate investment trusts (REITs) where understanding and integrating various property types and stakeholders is key.

Potential Challenges:
• Be mindful not to overlook important details while focusing on the big picture.
• Ensure you're not taking on too many responsibilities that could be delegated to others.

Development Opportunities:
1. Enhance your knowledge of real estate law and contracts to better understand all aspects of complex deals.
2. Develop your leadership skills to more effectively guide teams through intricate transactions.
3. Study advanced negotiation techniques to better balance the needs of multiple stakeholders.

Your Integrator skills position you well for handling sophisticated real estate transactions. By continuing to develop these abilities and being aware of potential pitfalls, you can become an indispensable asset in complex real estate scenarios.`,
  },
  synergist: {
    score: 60,
    description:
      "Synergists are skilled at creating harmonious collaborations and finding win-win solutions in real estate transactions.",
    explanation: `Your moderate Synergist score of 60% suggests you have a good foundation in creating collaborative environments and finding mutually beneficial solutions. This skill is particularly valuable in negotiations and conflict resolution within real estate deals.

Key Strengths:
1. Collaboration: You have a knack for bringing people together and fostering teamwork.
2. Win-Win Mindset: You naturally seek solutions that benefit all parties involved in a transaction.
3. Conflict Management: Your ability to harmonize different viewpoints helps in smoothing over disagreements.
4. Adaptability: You can adjust your approach to suit different personalities and situations.

Areas for Leverage:
• Focus on deals that require a high degree of cooperation, such as joint ventures or partnership-based investments.
• Consider specializing in markets or niches where community support is crucial, like urban renewal projects.
• Explore roles in real estate mediation or as a transaction coordinator where your synergistic skills can shine.

Potential Challenges:
• Be cautious of compromising too much in an effort to please all parties, potentially at the cost of your client's best interests.
• Ensure that your desire for harmony doesn't lead to avoiding necessary difficult conversations.

Development Opportunities:
1. Enhance your negotiation skills, focusing on strategies that create value for all parties.
2. Study group dynamics and team leadership to better facilitate collaborative environments.
3. Develop your assertiveness to balance your collaborative nature with the ability to stand firm when necessary.
4. Improve your financial analysis skills to ensure that win-win solutions are also financially sound.

Your Synergist abilities provide a solid foundation for creating harmonious and productive real estate transactions. By further developing these skills and being mindful of potential pitfalls, you can become highly effective in situations requiring cooperation and mutual benefit.`,
  },
  genius: {
    score: 45,
    description:
      "Geniuses in real estate have a knack for innovative problem-solving and thinking outside the box to close deals.",
    explanation: `Your Genius score of 45% indicates that while you have some capacity for innovative thinking, there's significant room for growth in this area. Developing your Genius traits can greatly enhance your ability to find unique solutions in challenging real estate scenarios.

Key Strengths:
1. Potential for Creative Thinking: You have a foundation for thinking outside the box, which can be further developed.
2. Openness to New Ideas: Your score suggests you're likely receptive to novel approaches in real estate.
3. Problem-Solving Base: You have a starting point for developing more advanced problem-solving skills.

Areas for Leverage:
• Look for opportunities to work on unconventional deals where your budding creative skills can be put to use.
• Seek out mentors known for their innovative approaches in real estate to learn from their strategies.
• Consider focusing on emerging areas of real estate, such as eco-friendly developments or smart home technologies, where innovative thinking is valued.

Potential Challenges:
• You may sometimes struggle to find unique solutions to complex problems, potentially falling back on conventional methods.
• There might be a tendency to overlook creative possibilities in favor of tried-and-true approaches.

Development Opportunities:
1. Engage in brainstorming exercises regularly to strengthen your creative muscles.
2. Study creative problem-solving techniques and apply them to real estate scenarios.
3. Expose yourself to diverse areas of knowledge outside of real estate to broaden your perspective and inspire innovative thinking.
4. Practice looking at properties and deals from multiple angles, always asking "What if?" to challenge conventional wisdom.
5. Collaborate with colleagues who score high on the Genius scale to learn from their approach.

While your current Genius score is lower, remember that creative thinking is a skill that can be developed with practice. By actively working on this area, you can significantly enhance your ability to find innovative solutions in your real estate career, setting yourself apart in challenging or unique situations.`,
  },
}

const strengthsData = [
  {
    title: "Wholesaling",
    description: "Exceptional at building trust and understanding seller motivations",
    action: "Leverage this strength by focusing on distressed properties and motivated sellers.",
    progressValue: 85,
    progressLabel: "Mastery Level",
    strongPoints: ["Rapid rapport building", "Identifying motivated sellers", "Negotiating win-win deals"],
    improvementAreas: [
      "Expand network of cash buyers",
      "Streamline due diligence process",
      "Enhance property valuation skills",
    ],
  },
  {
    title: "Creative Finance",
    description: "Skilled at explaining complex options and creating win-win scenarios",
    action: "Explore and offer more creative financing solutions to stand out in competitive markets.",
    progressValue: 78,
    progressLabel: "Expertise Level",
    strongPoints: ["Subject-to deals", "Lease options", "Owner financing structures"],
    improvementAreas: [
      "Stay updated on lending regulations",
      "Expand knowledge of commercial financing",
      "Develop more investor relationships",
    ],
  },
  {
    title: "Objection Handling",
    description: "Excellent emotional intelligence for addressing concerns",
    action: "Conduct workshops to share your objection handling techniques with your team.",
    progressValue: 92,
    progressLabel: "Proficiency Level",
    strongPoints: ["Active listening", "Empathetic responses", "Solution-oriented approach"],
    improvementAreas: [
      "Develop scripts for common objections",
      "Practice handling difficult personalities",
      "Learn advanced persuasion techniques",
    ],
  },
  {
    title: "Foreclosure Specialization",
    description: "High empathy with ability to maintain professional boundaries",
    action: "Develop a niche marketing strategy targeting homeowners facing foreclosure.",
    progressValue: 88,
    progressLabel: "Specialization Level",
    strongPoints: [
      "Understanding foreclosure timelines",
      "Navigating legal complexities",
      "Providing valuable alternatives to homeowners",
    ],
    improvementAreas: [
      "Build relationships with foreclosure attorneys",
      "Stay updated on local foreclosure laws",
      "Develop a system for tracking pre-foreclosure leads",
    ],
  },
]

const developmentAreas = [
  {
    title: "Analytical Skills",
    description: "Strengthen your ability to evaluate deals quickly and accurately.",
    currentLevel: 6,
    resources: [
      "Online course: 'Real Estate Analytics 101'",
      "Webinar: 'Fast Deal Evaluation Techniques'",
      "Book: 'The Real Estate Investor's Handbook'",
    ],
  },
  {
    title: "Negotiation",
    description: "Develop more assertiveness and effective strategies in negotiations.",
    currentLevel: 5,
    resources: [
      "Workshop: 'Mastering Real Estate Negotiations'",
      "Role-playing exercises with team members",
      "Podcast: 'The Art of the Deal in Real Estate'",
    ],
  },
  {
    title: "Market Trend Analysis",
    description: "Enhance your capability to identify and leverage market trends.",
    currentLevel: 4,
    resources: [
      "Subscription to local real estate market reports",
      "Seminar: 'Predicting Real Estate Market Shifts'",
      "Join local real estate investment groups for networking",
    ],
  },
]

const actionPlan = [
  { action: "Daily: 2 hours of cold calling when energy is highest", completed: false },
  { action: "Weekly: Analyze 10 potential deals using systematic approach", completed: false },
  { action: "Monthly: Research and implement 3 new financing strategies", completed: false },
]

const focusAreas = [
  {
    title: "Investment Analysis",
    value: 65,
    description: "Your analytical skills and market understanding make you well-suited for investment analysis.",
    tips: "Focus on developing financial modeling skills and understanding market dynamics.",
  },
  {
    title: "Property Development",
    value: 70,
    description: "Your ability to coordinate multiple stakeholders and see the big picture aligns with development.",
    tips: "Build knowledge in construction, zoning laws, and project management.",
  },
  {
    title: "Luxury Real Estate",
    value: 80,
    description: "Your strong interpersonal skills and attention to detail match luxury market requirements.",
    tips: "Develop expertise in high-end market trends and luxury client service.",
  },
]

const performanceMetrics = [
  {
    title: "Relationship Building",
    value: 85,
    description: "Your ability to establish and maintain strong connections with clients and partners.",
    tips: "Focus on active listening and follow-up to further improve this skill.",
  },
  {
    title: "Deal Conversion",
    value: 72,
    description: "The rate at which you successfully close real estate transactions.",
    tips: "Work on your negotiation skills and objection handling to increase your conversion rate.",
  },
  {
    title: "Follow-up Effectiveness",
    value: 90,
    description: "How well you maintain contact and provide value to clients over time.",
    tips: "Consider implementing a CRM system to streamline your follow-up process.",
  },
]
export default function DashboardPage() {
  const [showInfo, setShowInfo] = React.useState(Array(focusAreas.length).fill(false));
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);
  const handleDownloadPDF = () => {
    alert('PDF download started...');
  };

  return (
    <div className="h-full w-full bg-white overflow-auto p-4">
      <div className="w-full">  
        <div>
          <div className="p-0 m-0">
            <div className="p-0 m-0">
                <div className="grid gap-2">
                  <div className="bg-white rounded-xl p-2 border border-[#ddd] w-full">
                  {/* Header and buttons */}
                  <div className="flex items-center justify-between mb-2 flex-wrap md:flex-nowrap gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="https://res.cloudinary.com/drkudvyog/image/upload/v1739891270/Your_ISNG_Breakdown_icon_duha_iwpwyf.png"
                        alt="ISNG Breakdown Icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <h3 className="text-[21px] font-bold text-gray-900">Your ISNG Breakdown</h3>
                      <Popover>
                        <PopoverTrigger>
                          <Info className="w-4 h-4 text-[#5b06be] cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent className="w-72 p-4 bg-white rounded-xl border border-[#ddd]">
                          {/* Popover content */}
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                      <Button 
                        className="bg-[#5b06be] hover:bg-[#4a05a0] text-white font-semibold rounded-full px-3 py-1.5 flex items-center text-[15px]"
                        onClick={handleDownloadPDF}
                      >
                        <Image 
                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1739899165/Download_icon_white_nsird3.png"
                          alt="Download Icon"
                          width={16}
                          height={16}
                          className="w-4 h-4 mr-1.5"
                        />
                        Download PDF
                      </Button>
                      <Button className="bg-gradient-to-r from-[#fbb350] to-[#f89d2a] hover:from-[#faa240] hover:to-[#f78c1a] text-white font-semibold rounded-full px-5 py-2 flex items-center justify-center group transition-all duration-300 shadow-md hover:shadow-lg text-[15px]">
                        <Image 
                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1739898780/Retake_test_icon_white_rok0gd.png"
                          alt="Retake Test Icon"
                          width={16}
                          height={16}
                          className="w-4 h-4 mr-1.5 group-hover:rotate-180 transition-transform duration-500"
                        />
                        <div className="flex flex-col items-center -space-y-1">
                          <span className="text-[15px] font-semibold">Retake Test</span>
                          <span className="text-xs opacity-90">10 credits</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <p className="text-[15px] font-semibold text-gray-600 mb-3">
                    Discover your unique blend of ISNG traits and how they shape your real estate success. Each trait contributes to your personal approach and effectiveness in the industry.
                  </p>
                  
                  {/* Profile cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                    {Object.entries(profile)
                      .sort(([type]) => (type === "nurturer" ? -1 : 1))
                      .map(([type, { score, description, explanation }]) => (
                        <div
                          key={type}
                          className={`bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 border border-[#ddd] transition-all duration-300 ${
                            expandedCategory === type ? "shadow-xl relative z-10" : expandedCategory ? "opacity-25" : ""
                          }`}
                        >
                          <div className="mb-2">
                            <div className="flex items-center gap-2 mb-1">
                              {type === "nurturer" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739294075/Nurturer_icon_green_ccioe1.png"
                                  alt="Nurturer Icon"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 object-contain"
                                />
                              )}
                              {type === "integrator" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739294888/Integrator_icon_purple_xf50hd.png"
                                  alt="Integrator Icon"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 object-contain"
                                />
                              )}
                              {type === "synergist" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739295223/Synergist_icon_blue_gvi8zp.png"
                                  alt="Synergist Icon"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 object-contain"
                                />
                              )}
                              {type === "genius" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739295658/Genius_icon_yellow_d4fjhj.png"
                                  alt="Genius Icon"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 object-contain"
                                />
                              )}
                              <span
                                className={`text-[19px] font-black capitalize ${
                                  type === "nurturer"
                                    ? "text-green-600"
                                    : type === "integrator"
                                      ? "text-[#5b06be]"
                                      : type === "synergist"
                                        ? "text-blue-600"
                                        : "text-[#fbb350]"
                                }`}
                              >
                                {type}
                              </span>
                            </div>
                            <p className="text-[15px] font-semibold text-gray-600 mt-1">
                              {description}
                            </p>
                          </div>

                          <div className="flex flex-col">
                            <div className="mb-3">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-[15px] font-semibold text-gray-600">Score</span>
                                <span
                                  className={`text-[15px] font-semibold ${
                                    type === "nurturer"
                                      ? "text-green-600"
                                      : type === "integrator"
                                        ? "text-[#5b06be]"
                                        : type === "synergist"
                                          ? "text-blue-600"
                                          : "text-[#fbb350]"
                                  }`}
                                >
                                  {score}%
                                </span>
                              </div>
                              <Progress
                                value={score}
                                className={`h-1.5 bg-[#F4F4F5] ${
                                  type === "nurturer"
                                    ? "[&>div]:bg-green-500"
                                    : type === "integrator"
                                      ? "[&>div]:bg-[#5b06be]"
                                      : type === "synergist"
                                        ? "[&>div]:bg-blue-500"
                                        : "[&>div]:bg-[#fbb350]"
                                }`}
                              />
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className={`w-full text-[15px] py-1.5 px-3 rounded-full ${
                                type === "nurturer"
                                  ? "bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
                                  : type === "integrator"
                                    ? "bg-[#5b06be] hover:bg-[#4a05a0] text-white border-[#5b06be] hover:border-[#4a05a0]"
                                    : type === "synergist"
                                      ? "bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600"
                                      : "bg-[#fbb350] hover:bg-[#e9a23f] text-white border-[#fbb350] hover:border-[#e9a23f]"
                              }`}
                              onClick={() => {
                                setExpandedCategory(expandedCategory === type ? null : type)
                              }}
                            >
                              {expandedCategory === type ? "Hide Detailed Analysis" : "View Detailed Analysis"}
                            </Button>
                          </div>
                          
                          {/* Expanded detailed analysis */}
                          {expandedCategory === type && (
                            <div
                              className={`mt-4 text-[15px] font-semibold text-gray-700 bg-white p-4 rounded-xl relative z-20 w-full ${
                                type === "nurturer"
                                  ? "bg-green-50 border-green-200"
                                  : type === "integrator"
                                    ? "bg-purple-50 border-purple-200"
                                    : type === "synergist"
                                      ? "bg-blue-50 border-blue-200"
                                      : "bg-yellow-50 border-yellow-200"
                              } border-2`}
                            >
                              <h5
                                className={`text-[19px] font-black mb-3 ${
                                  type === "nurturer"
                                    ? "text-green-600"
                                    : type === "integrator"
                                      ? "text-purple-600"
                                      : type === "synergist"
                                        ? "text-blue-600"
                                        : "text-yellow-600"
                                }`}
                              >
                                Detailed Analysis
                              </h5>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <Card
                                  className={`border-l-4 h-full ${
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader className="py-2">
                                    <CardTitle
                                      className={`flex items-center text-[15px] ${
                                        type === "nurturer"
                                          ? "text-green-600"
                                          : type === "integrator"
                                            ? "text-purple-600"
                                            : type === "synergist"
                                              ? "text-blue-600"
                                              : "text-yellow-600"
                                      }`}
                                    >
                                      {type === "nurturer" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Key_Strengths_Action_Steps_icon_green_agowwc.png"
                                          alt="Key Strengths Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "integrator" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340416/Key_Strengths_Action_Steps_icon_purple_l6tzls.png"
                                          alt="Key Strengths Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "synergist" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Key_Strengths_Action_Steps_icon_blue_p0fynd.png"
                                          alt="Key Strengths Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340416/Key_Strengths_Action_Steps_icon_yellow_zwx47w.png"
                                          alt="Key Strengths Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      )}
                                      Key Strengths
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-2">
                                    <ul className="space-y-1.5">
                                      {explanation
                                        .split("\n\n")[1]
                                        .split("\n")
                                        .slice(1)
                                        .map((strength, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className={`w-2.5 h-2.5 mr-1 flex-shrink-0 mt-1 ${
                                              type === "nurturer"
                                                ? "text-green-600"
                                                : type === "integrator"
                                                  ? "text-purple-600"
                                                  : type === "synergist"
                                                    ? "text-blue-600"
                                                    : "text-yellow-600"
                                            }`} />
                                            <span className="text-xs leading-tight">{strength.replace(/^\d+\.\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>

                                <Card
                                  className={`border-l-4 h-full ${  
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader className="py-2">
                                    <CardTitle
                                      className={`flex items-center gap-2 text-[15px] ${
                                        type === "nurturer"
                                          ? "text-green-600"
                                          : type === "integrator"
                                            ? "text-purple-600"
                                            : type === "synergist"
                                              ? "text-blue-600"
                                              : "text-yellow-600"
                                      }`}
                                    >
                                      {type === "nurturer" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Areas_for_Leverage_icon_green_kenaxa.png"
                                          alt="Areas for Leverage Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "integrator" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Areas_for_Leverage_icon_purple_z1g5nr.png"
                                          alt="Areas for Leverage Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "synergist" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340414/Areas_for_Leverage_icon_blue_ahj9vz.png"
                                          alt="Areas for Leverage Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Areas_for_Leverage_icon_yellow_wxmytu.png"
                                          alt="Areas for Leverage Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      )}
                                      Areas for Leverage
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-2">
                                    <ul className="space-y-1.5">
                                      {explanation
                                        .split("\n\n")[2]
                                        .split("\n")
                                        .map((area, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className={`w-3 h-3 mr-1 flex-shrink-0 mt-0.5 ${
                                              type === "nurturer"
                                                ? "text-green-600"
                                                : type === "integrator"
                                                  ? "text-purple-600"
                                                  : type === "synergist"
                                                    ? "text-blue-600"
                                                    : "text-yellow-600"
                                            }`} />
                                            <span className="text-xs leading-tight">{area.replace(/^•\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>

                                <Card
                                  className={`border-l-4 h-full ${  
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader className="py-2">
                                    <CardTitle
                                      className={`flex items-center gap-2 text-[15px] ${
                                        type === "nurturer"
                                          ? "text-green-600"
                                          : type === "integrator"
                                            ? "text-purple-600"
                                            : type === "synergist"
                                              ? "text-blue-600"
                                              : "text-yellow-600"
                                      }`}
                                    >
                                      {type === "nurturer" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340416/Potential_Challenges_icon_green_af2fh9.png"
                                          alt="Potential Challenges Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "integrator" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340416/Potential_Challenges_icon_purple_dhhjbk.png"
                                          alt="Potential Challenges Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "synergist" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340416/Potential_Challenges_icon_blue_dwkyci.png"
                                          alt="Potential Challenges Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340416/Potential_Challenges_icon_yellow_mffpx2.png"
                                          alt="Potential Challenges Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      )}
                                      Potential Challenges
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-2">
                                    <ul className="space-y-1.5">
                                      {explanation
                                        .split("\n\n")[3]
                                        .split("\n")
                                        .map((challenge, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className={`w-3 h-3 mr-1 flex-shrink-0 mt-0.5 ${
                                              type === "nurturer"
                                                ? "text-green-600"
                                                : type === "integrator"
                                                  ? "text-purple-600"
                                                  : type === "synergist"
                                                    ? "text-blue-600"
                                                    : "text-yellow-600"
                                            }`} />
                                            <span className="text-xs leading-tight">{challenge.replace(/^•\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>

                                <Card
                                  className={`border-l-4 h-full ${  
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader className="py-2">
                                    <CardTitle
                                      className={`flex items-center gap-2 text-[15px] ${
                                        type === "nurturer"
                                          ? "text-green-600"
                                          : type === "integrator"
                                            ? "text-purple-600"
                                            : type === "synergist"
                                              ? "text-blue-600"
                                              : "text-yellow-600"
                                      }`}
                                    >
                                      {type === "nurturer" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Development_Opportunities_icon_green_x0ejdp.png"
                                          alt="Development Opportunities Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "integrator" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Development_Opportunities_icon_purple_cd2uej.png"
                                          alt="Development Opportunities Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : type === "synergist" ? (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340415/Development_Opportunities_icon_blue_dlokrs.png"
                                          alt="Development Opportunities Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      ) : (
                                        <Image
                                          src="https://res.cloudinary.com/drkudvyog/image/upload/v1740340414/Development_Opportunities_icon_yellow_nhk1z1.png"
                                          alt="Development Opportunities Icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                      )}
                                      Development Opportunities
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-2">
                                    <ul className="space-y-1.5">
                                      {explanation
                                        .split("\n\n")[4]
                                        .split("\n")
                                        .slice(1)
                                        .map((opportunity, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className={`w-3 h-3 mr-1 flex-shrink-0 mt-0.5 ${
                                              type === "nurturer"
                                                ? "text-green-600"
                                                : type === "integrator"
                                                  ? "text-purple-600"
                                                  : type === "synergist"
                                                    ? "text-blue-600"
                                                    : "text-yellow-600"
                                            }`} />
                                            <span className="text-xs leading-tight">{opportunity.replace(/^\d+\.\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Recommended Focus Areas */}
                <CardContent className="p-4 bg-white rounded-xl border border-[#ddd] mb-4 mt-6 overflow-hidden">
                  <h2 className="text-[21px] font-bold flex items-center text-gray-900 mb-3">
                    <Image
                      src="https://res.cloudinary.com/drkudvyog/image/upload/v1733953951/Areas_of_improvement_icon_duha_u5o65j.png"
                      alt="Areas of Improvement Icon"
                      width={20}
                      height={20}
                      className="w-5 h-5 mr-2"
                    />
                    Recommended Focus Areas
                  </h2>
                  <p className="text-[15px] font-semibold text-gray-600 mb-3">
                    Based on your natural abilities and prerequisites, these are the top three areas where you should
                    focus your real estate career:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {focusAreas.map((area, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 border border-[#ddd]"
                      >
                        <div className="flex-grow">
                          {!showInfo[index] ? (
                            <div className="flex flex-col items-center justify-center h-full">
                              <div className="relative w-28 h-28 mb-3">
                                <svg className="w-full h-full transform -rotate-90">
                                  <circle
                                    className="text-[#F4F4F5]"
                                    strokeWidth="8"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="52"
                                    cx="56"
                                    cy="56"
                                  />
                                  <circle
                                    className="text-[#5b06be] transition-all duration-1000 ease-in-out"
                                    strokeWidth="8"
                                    strokeDasharray={327}
                                    strokeDashoffset={327 * (1 - area.value / 100)}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="52"
                                    cx="56"
                                    cy="56"
                                  />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-2xl font-bold text-[#5b06be]">{area.value}%</span>
                                </div>
                              </div>
                              <h3 className="text-[19px] font-black text-[#5b06be] mb-2 mt-3 text-center">{area.title}</h3>
                              <p className="text-[15px] font-semibold text-gray-600 mt-1">{area.description}</p>
                            </div>
                          ) : (
                            <div className="h-full flex flex-col">
                              <h3 className="text-[19px] font-black text-[#5b06be] mb-2">{area.title}</h3>
                              <p className="text-[15px] font-semibold text-gray-600 mb-3 flex-grow leading-relaxed">{area.description}</p>
                              <div className="bg-white rounded-lg p-3 shadow-[0_0_10px_rgba(125,59,219,0.3)]">
                                <h4 className="font-semibold text-[15px] text-[#7d3bdb] mb-1">Tips to Improve:</h4>
                                <p className="text-[15px] font-semibold text-gray-600 leading-relaxed">{area.tips}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => {
                            const newShowInfo = [...showInfo]
                            newShowInfo[index] = !newShowInfo[index]
                            setShowInfo(newShowInfo)
                          }}
                          className="mt-4 bg-[#5b06be] text-white hover:bg-[#4a05a0] transition-all duration-200 rounded-full w-full px-4 py-2 text-[15px] flex items-center justify-center gap-2"
                        >
                          {showInfo[index] ? (
                            <>
                              <Image 
                                src="https://res.cloudinary.com/drkudvyog/image/upload/v1739900545/view_Metric_icon_white_arbbwr.png"
                                alt="View Metric Icon"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                              View Metric
                            </>
                          ) : (
                            <>
                              <Image 
                                src="https://res.cloudinary.com/drkudvyog/image/upload/v1739897624/info_icon_white_xk1opa.png"
                                alt="Info Icon"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                              View Info
                            </>
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                  </CardContent>

{/* Key Strengths & Action Steps */}
<div>
<div className="bg-white rounded-xl overflow-hidden border border-[#ddd] mt-4 mb-4">
    <div className="p-4">
      <h2 className="text-[21px] font-bold flex items-center text-gray-900 mb-2">
        <Image
          src="https://res.cloudinary.com/drkudvyog/image/upload/v1739897407/Key_Strengths_Action_Steps_gjkxrh.png"
          alt="Key Strengths & Action Steps Icon"
          width={20}
          height={20}
          className="w-5 h-5 mr-2"
        />
        Key Strengths & Action Steps
      </h2>
      <p className="text-[15px] font-semibold text-gray-600 mb-3">
        These are the most important real estate strengths. Use them to excel in your career!
      </p>
      <div className="mt-4 mb-6">
        {strengthsData.slice(3, 4).map((strength, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-[#ddd] transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[19px] font-black text-[#fbb350]">{strength.title}</h3>
              <div className="w-12 h-12 rounded-full bg-[#fbb350] flex items-center justify-center">
                <Star className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="mb-3">
              <div className="rounded-lg border border-[#ddd] p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[15px] font-semibold text-gray-600">{strength.progressLabel}</span>
                  <span className="text-[15px] font-semibold text-[#fbb350]">{strength.progressValue}%</span>
                </div>
                <Progress 
                  value={strength.progressValue} 
                  className="h-1.5 mb-1 bg-zinc-100 [&>div]:bg-[#fbb350]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] p-3">
                <h4 className="font-semibold text-[15px] text-[#fbb350] mb-1 flex items-center">
                  <Image 
                    src="https://res.cloudinary.com/drkudvyog/image/upload/v1739899489/Strong_points_icon_yellow_nqi6t7.png"
                    alt="Strong Points Icon"
                    width={16}
                    height={16}
                    className="w-4 h-4 mr-1"  
                  />
                  Strong Points
                </h4>
                <ul className="list-disc list-inside text-[15px] font-semibold text-gray-600">
                  {strength.strongPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] p-3">
                <h4 className="font-semibold text-[15px] text-[#fbb350] mb-1 flex items-center">
                  <Image 
                    src="https://res.cloudinary.com/drkudvyog/image/upload/v1739899489/Areas_of_improvement_icon_yellow_epwqfk.png"
                    alt="Areas to Improve Icon"
                    width={16}
                    height={16}
                    className="w-4 h-4 mr-1"
                  />
                  Areas to Improve
                </h4>
                <ul className="list-disc list-inside text-[15px] font-semibold text-gray-600">
                  {strength.improvementAreas.map((area, idx) => (
                    <li key={idx}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-[0_0_10px_rgba(255,180,0,0.2)]">
              <h4 className="font-semibold text-[15px] text-[#fbb350] mb-1 flex items-center">
                <Image 
                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739899489/Value_Proposion_icon_yellow_jsnvk9.png"
                  alt="Value Proposition Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 mr-1"
                />
                Value Proposition
              </h4>
              <p className="text-[15px] font-semibold text-gray-700">
                Leveraging your expertise in {strength.title.toLowerCase()} can significantly increase
                your deal flow and client satisfaction. Focus on this strength to stand out in the market
                and drive your success.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
        {strengthsData.slice(0, 3).map((strength, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-3 border border-[#ddd] transition-all duration-300 hover:border border-[#ddd] group"
          >
            <div className="flex items-center justify-center mb-2">
              <h3 className="text-[15px] font-semibold text-[#5b06be] text-center">{strength.title}</h3>
            </div>
            <div className="flex flex-col items-center justify-center h-12">
              <span className="text-xl font-bold text-[#5b06be] mb-1">{strength.progressValue}%</span>
              <div className="w-full bg-[#F4F4F5] rounded-full h-1.5">
                <div
                  className="bg-[#5b06be] h-1.5 rounded-full"
                  style={{ width: `${strength.progressValue}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
