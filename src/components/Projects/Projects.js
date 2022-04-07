import './Projects.css';
import ImageCarousel from './ImageCarousel';

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects_container'>
                <div className='project project_1'>
                    <div className='project_info'>
                        <h2>Title</h2>
                        <p>
                            Carousels dont automatically normalize slide
                            dimensions. As such, you may need to use additional
                            utilities or custom styles to appropriately size
                            content. While carousels support previous/next
                            controls and indicators, theyre not explicitly
                            required. Add and customize as you see fit.
                        </p>
                    </div>

                    <ImageCarousel />
                </div>
                <div className='project project_2'>
                    <div className='project_info'>
                        <h2>Title</h2>
                        <p>
                            Carousels dont automatically normalize slide
                            dimensions. As such, you may need to use additional
                            utilities or custom styles to appropriately size
                            content. While carousels support previous/next
                            controls and indicators, theyre not explicitly
                            required. Add and customize as you see fit.
                        </p>
                    </div>

                    <ImageCarousel />
                </div>

                <div className='project project_3'>
                    <div className='project_info'>
                        <h2>Title</h2>
                        <p>
                            Carousels dont automatically normalize slide
                            dimensions. As such, you may need to use additional
                            utilities or custom styles to appropriately size
                            content. While carousels support previous/next
                            controls and indicators, theyre not explicitly
                            required. Add and customize as you see fit.
                        </p>
                    </div>

                    <ImageCarousel />
                </div>
                <div className='project project_4'>
                    <div className='project_info'>
                        <h2>Title</h2>
                        <p>
                            Carousels dont automatically normalize slide
                            dimensions. As such, you may need to use additional
                            utilities or custom styles to appropriately size
                            content. While carousels support previous/next
                            controls and indicators, theyre not explicitly
                            required. Add and customize as you see fit.
                        </p>
                    </div>

                    <ImageCarousel />
                </div>
            </div>
        </div>
    );
};

export default Projects;
