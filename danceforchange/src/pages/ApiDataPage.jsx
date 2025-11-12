import {useState, useEffect} from 'react'
import {fetchPosts, fetchUsers} from '../api/posts'; //, ,fetchPhotos
import { FaExclamationTriangle } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';


const ApiDataPage = () => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    // const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const loadData = async () => {
            try{
                setLoading(true);
                setError(null);

                const [postsData, usersData] = await Promise.all([
                    fetchPosts(),
                    fetchUsers(),
                    // fetchPhotos()
                ]); //

                setPosts(postsData);
                setUsers(usersData);
                // setPhotos(photosData);  
            }catch(error){
                setError(error.message);
                console.error('Error loading API data:', error);
            }finally{
                setLoading(false);
            }
        };

        loadData();
    },[]);

    //get user name by user id
    const getUserName = (userId) => {
        const user = users.find((user) =>  user.id === userId);
        return user ? user.name : 'Unknown User';
    }

    //get photo for post
    const getPhotoForPost = (postId) => {
        // const photo = photos.find((photo) => photo.albumId === postId);
        // console.log(`Looking for photo with albumId: ${postId}`);
        // console.log('Found photo:', photo);
        // console.log('Returning URL:', photo ? photo.thumbnailUrl : null);
        // return photo ? photo.thumbnailUrl : null;
        return `https://picsum.photos/seed/${postId}/400/300`;
    }

    //filter posts based on search term
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //retry function if api fails
    const handleRetry = () => {
        setError(null);
        setLoading(true);

        window.location.reload(); //simple way to retry loading data
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page Header */}
            <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                🌐 API Data Explorer
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                Fetching real-time data from JSONPlaceholder API
            </p>
            </div>
            
            {/* Search Bar */}
            {!loading && !error && (
            <div className="mb-6">
                <input
                type="text"
                placeholder="Search posts by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
                
                {searchTerm && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
                </p>
                )}
            </div>
            )}
            
            {/* Loading State */}
            {loading && (
            <div className="flex flex-col items-center justify-center py-20">
                
                {/* Animated Spinner */}
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
                
                
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                Loading posts...
                </p>
            </div>
            )}

            
            
            {/* Error State */}
            {error && (
            <Card className="bg-red-50 dark:bg-red-900 border-2 border-red-200 dark:border-red-700">
                <div className="flex items-start gap-4">
                <span className="text-4xl"><FaExclamationTriangle /></span>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                    Oops! Something went wrong
                    </h3>
                    <p className="text-red-700 dark:text-red-200 mb-4">
                    {error}
                    </p>
                    <Button 
                    variant="danger" 
                    onClick={handleRetry}
                    >
                    🔄 Try Again
                    </Button>
                </div>
                </div>
            </Card>
            )}
            
            {/* Posts Grid */}
            {!loading && !error && (
            <>
                {/* Stats Bar */}
                <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600 dark:text-gray-400">
                    Showing <span className="font-bold text-gray-900 dark:text-white">{filteredPosts.length}</span> posts
                </p>
                {searchTerm && (
                    <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setSearchTerm('')}
                    >
                    Clear Search
                    </Button>
                )}
                </div>
                
                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {filteredPosts.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        No posts found matching "{searchTerm}"
                    </p>
                    </div>
                ) : (
                    filteredPosts.slice(0, 30).map((post) => {
                        const photoUrl = getPhotoForPost(post.id); 
                        console.log(`Post ${post.id}: photoUrl = ${photoUrl}`);
                        
                        return (
                        <Card 
                            key={post.id} 
                            hoverable
                            className="flex flex-col h-full overflow-hidden "
                        >
                            {/* ✅ Photo Thumbnail (if available) */}
                            {photoUrl && (
                                <div className="relative h-48 mb-4 -mt-6 -ml-6 -mr-6 rounded-t-lg overflow-hidden" style={{width: 'calc(100% + 48px)'}} >
                                    
                                    <img
                                        src={photoUrl} 
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        
                                    />
                                    
                                    {/* Overlay gradient for better text readability */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                                    
                                    
                                    {/* Post number badge on image */}
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg">
                                            
                                            Post #{post.id}
                                        </span>
                                    </div>
                                </div>
                            )}
                            
                            {/* Post Header (if no photo) */}
                            {!photoUrl && (
                                <div className="flex items-start justify-between mb-3">
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-1 rounded">
                                        Post #{post.id}
                                    </span>
                                    <span className="text-2xl">📄</span>
                                </div>
                            )}
                            
                            {/* Post Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                {post.title}
                            </h3>
                            
                            {/* Post Body */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                {post.body}
                            </p>
                            
                            {/* Post Author */}
                            <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <span className="text-gray-600 dark:text-gray-400 text-sm">
                                    👤 By <span className="font-semibold text-gray-900 dark:text-white">
                                        {getUserName(post.userId)}
                                    </span>
                                </span>
                            </div>
                        </Card>
                        );
                    })
                )}
                </div>
            </>
            )}
        </div>
    </div>
    );
};

export default ApiDataPage