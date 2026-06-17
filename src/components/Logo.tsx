import { motion } from "framer-motion";

const Logo = () => {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative flex flex-col items-center justify-center">
                <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground relative z-10">
                    ON <span className="text-foreground">NEXT</span> WEB
                </h1>
            </div>
        </div>
    );
};

export default Logo;
