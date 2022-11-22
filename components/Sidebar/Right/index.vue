<template>
<div class="flex-col">
    <!-- Preview card: what's happening-->
    <SidebarRightPreviewCard title="What's happening" >
        <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems" :key="whatsHappening.id">
           <div>
                <h2 class="font-bold text-gray-800 text-md dark:text-white">{{whatsHappening.title}}</h2>
                <p class="text-xs text-gray-400">
                    {{whatsHappening.count}}
                </p>
           </div>
        </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>


    <!--Preview card: who to follow-->
    <SidebarRightPreviewCard title="Who to follow" >
        <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems" :key="whoToFollow.id">
            <div class="flex flex-row items-center  justify-between p-2" >
                <div class="flex flex-row">
                    <img :src="whoToFollow.image" alt="Who To Follow" class="w-10 h-10 rounded-full"/>


            <div class="flex flex-col ml-2">
                <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{whoToFollow.name}}</h1>
                <p class="text-xs text-gray-600">{{whoToFollow.handle}}</p>
            </div>
            </div>
            <div class="flex h-full ">
                <button class="px-4 py-2 text-xs font-bold text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
            </div>
        </div>

        </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
</div>
</template>
<script setup>
    const whatsHappeningItems=ref([
            {
            title:'SpaceX',
            count:'18.8k Tweets'
        },
        {
            title:'#CodingIsFun',
            count:'18.8k Tweets'
        },
        {
            title:'#artforall',
            count:'18.8k Tweets'
        }
    ])
    const whoToFollowItems=ref([
        {
            name:'Aryan Prince',
            handle:'@iAmNoob',
            image:'https://avatars.githubusercontent.com/u/45622345?v=4'
        },
        {
            name:'Happy Christian',
            handle:'@iAmPro',
            image:'https://avatars.githubusercontent.com/u/47019854?v=4'
        },
        {
            name:'Elon Musk',
            handle:'@iAmAlien',
            image:'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/elon-3_5-sixteen_nine.jpg?size=948:533'
        }
    ])
</script>
