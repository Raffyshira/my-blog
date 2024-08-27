import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsInstall = () => {
    return (
        <>
            <Tabs defaultValue="npm" className="w-[200px]">
                <TabsList>
                    <TabsTrigger value="npm">npm</TabsTrigger>
                    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                    <TabsTrigger value="yarn">yarn</TabsTrigger>
                </TabsList>
                <TabsContent value="npm">
                </TabsContent>
            </Tabs>
        </>
    );
};
