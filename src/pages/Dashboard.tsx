import { Link } from 'react-router-dom';
import { ImageIcon, TrendingUpIcon, CrownIcon } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SAMPLE_IMAGES } from '../utils/constants';
const Dashboard = () => {
  return <Layout>
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, Alex
            </h1>
            <p className="text-white/70">
              Let's bring your imagination to life
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/generate">
              <Button variant="primary" icon={<ImageIcon size={18} />}>
                New Generation
              </Button>
            </Link>
          </div>
        </div>
        {/* Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card variant="glass" className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Daily Generations</p>
                <h3 className="text-2xl font-bold mt-1">5 / 10</h3>
                <p className="text-white/60 text-xs mt-1">Resets in 14h 23m</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                <ImageIcon size={24} className="text-primary-400" />
              </div>
            </div>
            <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" style={{
              width: '50%'
            }}></div>
            </div>
          </Card>
          <Card variant="glass" className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Recent Activity</p>
                <h3 className="text-2xl font-bold mt-1">12 images</h3>
                <p className="text-white/60 text-xs mt-1">Last 7 days</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary-500/20 flex items-center justify-center">
                <TrendingUpIcon size={24} className="text-secondary-400" />
              </div>
            </div>
            <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full" style={{
              width: '70%'
            }}></div>
            </div>
          </Card>
          <Card variant="glass" className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Current Plan</p>
                <h3 className="text-2xl font-bold mt-1">Free</h3>
                <p className="text-white/60 text-xs mt-1">Limited access</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <CrownIcon size={24} className="text-amber-400" />
              </div>
            </div>
            <Button variant="secondary" size="sm" fullWidth className="mt-4">
              Upgrade Plan
            </Button>
          </Card>
        </div>
        {/* Recent Generations */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Generations</h2>
            <Link to="/gallery" className="text-sm text-primary-400 hover:text-primary-300">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SAMPLE_IMAGES.slice(0, 4).map(image => <Card key={image.id} variant="default" hover className="overflow-hidden aspect-square">
                <img src={image.url} alt={image.prompt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </Card>)}
          </div>
        </div>
        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="glass" className="p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                  <ImageIcon size={20} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium">New Generation</h3>
                  <p className="text-sm text-white/60">Create a new AI image</p>
                </div>
              </div>
            </Card>
            <Card variant="glass" className="p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-secondary-500/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-400">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Edit Prompts</h3>
                  <p className="text-sm text-white/60">
                    Refine your saved prompts
                  </p>
                </div>
              </div>
            </Card>
            <Card variant="glass" className="p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                  <CrownIcon size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium">Upgrade Plan</h3>
                  <p className="text-sm text-white/60">Get more generations</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Dashboard;