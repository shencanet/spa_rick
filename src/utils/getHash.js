const gerHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
export default gerHash;
