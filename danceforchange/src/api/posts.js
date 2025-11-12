

const APIBASE_URI = import.meta.env.VITE_APIBASE_URI;

export const fetchPosts = async () => {
    try{
        const response = await fetch(`${APIBASE_URI}/posts`);
        // console.log('Fetch Posts Response:', response);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    }catch(error){
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts. Please try again later.');
    }
};

export const fetchPostById = async (id) => {
    try{
        const response = await fetch(`${APIBASE_URI}/posts/${id}`);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error(`Error fetching post with id ${id}:`, error);
        throw new Error('Failed to fetch post. Please try again later.');
    }
};

export const fetchUsers = async () => {
    try{

        const response = await fetch(`${APIBASE_URI}/users`);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }catch(error){
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users. Please try again later.');
    }
};

export const fetchPhotos = async () => {
    try{
        const response = await fetch(`${APIBASE_URI}/photos`);
        console.log('Fetch Photos Response:', response);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched Photos Data:', data);
        return data;
    }catch(error){
        console.error('Error fetching photos:', error);
        throw new Error('Failed to fetch photos. Please try again later.');
    }
};