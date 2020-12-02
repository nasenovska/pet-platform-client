import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Post} from "../../model/model.post";
import {Subject} from "rxjs";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  destroy$ = new Subject<boolean>();

  constructor() {
  }

  ngOnInit(): void {
    console.log('In init');
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onDelete(id: number): void {
    // this.courseService.deleteCourse(id).pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe(() => {
    //   this.getCourses();
    // });
  }

  navigateToView(id: number){
   // this.router.navigate([`/posts/view/${id}`]);
  }


  private getPosts(): void {
    console.log('in get posts');
    this.posts = this.definedPosts;
      console.log('posts: '+this.posts);
    // this.postService.getPosts().pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe(response => {
    //   console.log(response);
    //   this.posts = response;
    // }, error => {
    //   console.log(error);
    // });
  }


  definedPosts = [{
    id: 1,
    title: 'How to help a cat to lose weight',
    description: '1. Set a weight loss goal and track your progress.\n' +
      '\n' +
      'The first step in getting your overweight kitty back to a healthy weight is determining what that healthy weight should be. Your veterinarian can help assess your cat’s current body condition score (BCS) and determine their ideal body weight.\n' +
      '\n' +
      'Once you have a target weight, begin tracking your cat’s progress toward that goal. Cats on a weight\n' +
      '\n' +
      'loss plan should be weighed at least monthly; once weekly is ideal. You can use a regular bathroom scale. Weigh yourself, then weigh yourself holding your cat and subtract your own weight from the total (some scales will even do this math for you). Track your cat’s weekly weigh-ins and bring this log every time you visit your veterinarian to discuss your cat’s progress. Ideally your cat should lose no more than 1% of their body weight each week, as faster weight loss than this can be dangerous to their health.' +
      '2. Feed fewer calories.\n' +
      '\n' +
      'Just like people, cats need to cut calories in order to lose weight, so you will need to reduce their caloric intake. A common misconception is that cats don’t need to be fed regular meals like dogs do – that they can have constant access to a bowl of food and regulate themselves. But the majority of cats don’t have such self-restraint, and continuous feeding has contributed to the high rate of obesity in pet cats. Try to measure how much you are currently feeding (how big is “one scoop”?) and bring this information to your veterinarian when you discuss your cat’s weight loss plan. Your veterinarian will help determine how many calories your pet is currently eating and what their initial caloric goal should be. Calorie reduction should always be done under the supervision of a veterinarian to avoid rapid or unsafe weight loss.\n' +
      '\n' +
      '3. Feed a canned diet.\n' +
      '\n' +
      'Canned cat food is often lower in calories compared to the same amount of dry food. The increased water content in canned food helps your cat feel full and satisfied after meals without adding extra calories. Feeding the canned version of your pet’s current diet can be an easy way to decrease the calories the cat is receiving. Being able to feed a larger amount of food for the same number of calories can reduce begging behavior as well.\n' +
      '\n' +
      '4. Switch to a low-calorie or prescription weight loss diet.\n' +
      '\n' +
      'While pets who are just a bit overweight can sometimes lose weight by simply eating less of their current diet, pets who are very overweight may need to eat a diet specifically designed for weight loss. There are a number of over-the-counter cat foods that are mildly calorie-reduced and may be labeled as “low-calorie,” “light,” or “healthy weight.” These may be a good starting point. However, cats who are significantly overweight or obese may benefit from a prescription weight loss diet. These diets are specially formulated to be low in calories, high in fiber, and nutritionally complete, even when fed in very restricted amounts. These special weight loss diets need to be prescribed by your veterinarian. If making a diet change, always transition gradually from the old diet to the new diet by mixing in slightly more of the new diet each day to avoid stomach upset.\n' +
      '\n' +
      '5. Get up and move!\n' +
      '\n' +
      'While managing your cat’s caloric intake is going to be the most important part of their weight loss journey, increasing physical activity will help them build muscle and raise their resting metabolic rate. Consider providing toys that encourage activity, such as laser pointers or feather toys. Attempt to have at least one active play session with your cat daily. Make sure your home has vertical space for your cat to explore, such as a cat tree or cat shelving. If your cat enjoys the outdoors, short walks with a leash and harness may increase their physical activity and provide mental enrichment. If outdoor walks are part of your cat’s fitness plan, be sure to talk to your veterinarian about using a monthly parasite prevention product.',
    datePublished: new Date(),
    imageUrl: 'https://usercontent1.hubstatic.com/14650762_f496.jpg'
  },
    {
      id: 2,
      title: 'Creating a Weight Reduction Plan for Cats',
      description: 'Weight loss is tough for anyone - two- or four-legged! However, losing weight and getting in shape can not only add years to your cat\'s life, but it can also make those extra years more enjoyable. Helping your furry feline to shed a few pounds may be easier than you think. It simply requires a commitment to weight loss and fitness, attention to details, and the assistance of your veterinary healthcare team.avoiding_feline_obesity\n' +
        'Why should my cat lose weight?\n' +
        'As little as two pounds above the ideal body weight can put your cat at risk for developing some serious medical conditions. Unfortunately, when a cat is overweight or obese it no longer is a question of if your cat will develop a condition secondary to the excess weight, but how soon and how serious. Some of the common disorders associated with excess weight include:\n' +
        '\n' +
        'type 2 diabetes - an obese cat is three times more likely to develop this serious disease than a cat of normal weight\n' +
        'heart disease\n' +
        'osteoarthritis (arthritis)\n' +
        'increased frequency of joint injuries\n' +
        'high blood pressure\n' +
        'some forms of cancer - especially intra-abdominal cancers\n' +
        'Overweight and obese cats usually have shorter lives than their fitter, normal weight counterparts do. Heavy cats tend to physically interact less with their families and are less energetic and playful. Because they tend to lie around more, it is easier to overlook early signs of illness, since we may attribute their lethargy to their normal laziness. We are just now learning how serious and threatening a few extra pounds can be for both humans and our cuddly companions.\n' +
        '\n' +
        'How should I begin a weight loss program for my cat?\n' +
        'Theoretically, weight loss seems simple enough: fewer calories in plus more calories out equals weight loss. Unfortunately, it is not as simple as that. You should never put an obese cat on a diet without veterinary supervision.\n' +
        '\n' +
        '"If cats do not eat for as little as two consecutive days, they can develop a life-threatening form of liver disease known as hepatic lipidosis."\n' +
        'The cat\'s physiology is different than humans or dogs and if they do not eat for as little as two consecutive days, they can develop a life-threatening form of liver disease known as hepatic lipidosis (also called fatty liver syndrome). Your veterinarian will perform a physical examination of your cat, and will likely recommend some diagnostic testing to ensure that there are no underlying diseases or obstacles to weight loss for your cat.',
      datePublished: new Date(),
      imageUrl: 'https://wallpaperaccess.com/full/106449.jpg'
    }];

}
