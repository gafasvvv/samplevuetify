<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
        
        <v-layout row>
            <v-flex xs12 md6 lg3 wrap v-for="person in team" :key="person.name">
                <v-card flat class="text-xs-center ma-3">
                    <v-responsive class="pt-4">
                        <v-avatar size="100" class="grey lighten-2">
                            <img :src="person.avatar">
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="grey">
                            <v-icon small left>message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
    
  </div>
</template>

<script> 

export default {
    data() {
        return {
            team: [
                { name:'Ryosuke', role: 'Web Engineer' ,avatar:'/avatar.png'},
                { name:'Masashi', role: 'Web marketer',avatar:'/avatar.png' },
                { name:'Kota', role: 'Game plannner',avatar:'/avatar.png' },
                { name:'Naoto', role: 'sales' ,avatar:'/avatar.png'},
            ]
        }
    }
}
</script>