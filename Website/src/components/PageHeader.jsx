
const PageHeader = ({ title, description }) => {
    return (
        <section className="bg-white text-primary pt-10 pb-1">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                {description && (
                    <p className="text-lg text-primary/90 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHeader;
